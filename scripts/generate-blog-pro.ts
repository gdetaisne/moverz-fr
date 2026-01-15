import fs from "node:fs";
import path from "node:path";

type Frontmatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
  category?: string;
  tags?: string[];
};

function readFiles(dir: string): string[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(dir, f));
}

function parseFrontmatter(raw: string): { fm: Frontmatter; body: string } {
  const m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!m) throw new Error("Missing frontmatter block (--- ... ---).");

  const fmText = m[1];
  const body = m[2].trim() + "\n";

  const fm: any = {};
  let currentKey: string | null = null;
  for (const line of fmText.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const keyMatch = /^([a-zA-Z0-9_-]+):\s*(.*)$/.exec(line);
    if (keyMatch) {
      const key = keyMatch[1];
      let value = keyMatch[2].trim();
      currentKey = key;
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      fm[key] = value;
      continue;
    }
    const listItem = /^\s*-\s*(.+)$/.exec(line);
    if (listItem && currentKey) {
      if (!Array.isArray(fm[currentKey])) fm[currentKey] = [];
      fm[currentKey].push(listItem[1].trim());
    }
  }

  if (!fm.title || !fm.description || !fm.date || !fm.slug) {
    throw new Error(`Frontmatter incomplete (need title/description/date/slug). Got: ${JSON.stringify(fm)}`);
  }

  return { fm: fm as Frontmatter, body };
}

function escapeTemplateLiteral(s: string): string {
  return s.replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function toIso(date: string): string {
  // Accept YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return `${date}T00:00:00.000Z`;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) throw new Error(`Invalid date: ${date}`);
  return d.toISOString();
}

function main() {
  const repoRoot = process.cwd();
  const contentDir = path.join(repoRoot, "content", "blog-pro");
  const outFile = path.join(repoRoot, "lib", "blog-pro.generated.ts");

  const files = readFiles(contentDir);
  const parsed = files.map((f) => ({ file: f, ...parseFrontmatter(fs.readFileSync(f, "utf8")) }));

  const meta = parsed.map((p) => ({
    slug: p.fm.slug,
    title: p.fm.title,
    description: p.fm.description,
    publishedAt: toIso(p.fm.date),
    tags: p.fm.tags ?? [],
  }));

  const canonical = parsed.map((p) => ({
    slug: p.fm.slug,
    title: p.fm.title,
    description: p.fm.description,
    type: "satellite" as const,
    body: p.body,
  }));

  // Mark first 3 as pilier by convention (can be adapted).
  canonical.slice(0, 3).forEach((c) => (c.type = "pilier"));

  const file =
    `import type { CanonicalBlogPost } from "./blog-canonique";\n\n` +
    `export type ProBlogMeta = {\n` +
    `  slug: string;\n  title: string;\n  description: string;\n  publishedAt: string;\n  updatedAt?: string;\n  tags: string[];\n  readingTimeMinutes?: number;\n` +
    `};\n\n` +
    `// Source: \`content/blog-pro/*.md\` (frontmatter). Auto-généré.\n` +
    `export const BLOG_PRO_META: ProBlogMeta[] = ${JSON.stringify(meta, null, 2)};\n\n` +
    `export const CANONICAL_PRO_BLOG_POSTS: CanonicalBlogPost[] = [\n` +
    canonical
      .map((c) => {
        return (
          `  {\n` +
          `    slug: ${JSON.stringify(c.slug)},\n` +
          `    title: ${JSON.stringify(c.title)},\n` +
          `    description: ${JSON.stringify(c.description)},\n` +
          `    type: ${JSON.stringify(c.type)},\n` +
          `    body: \`${escapeTemplateLiteral(c.body)}\`,\n` +
          `  }`
        );
      })
      .join(",\n") +
    `\n];\n`;

  fs.writeFileSync(outFile, file, "utf8");
  // eslint-disable-next-line no-console
  console.log(`Generated ${path.relative(repoRoot, outFile)} from ${files.length} files.`);
}

main();

