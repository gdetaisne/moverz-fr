import { readFileSync, existsSync } from "fs";
import { join } from "path";

function loadTodo(): string | null {
  const path = join(process.cwd(), "docs/SEO/TODO.md");
  if (!existsSync(path)) return null;
  return readFileSync(path, "utf-8");
}

function parseTodoItems(md: string) {
  const lines = md.split("\n");
  const items: { checked: boolean; label: string; section: string }[] = [];
  let currentSection = "";

  for (const line of lines) {
    if (line.startsWith("## ")) {
      currentSection = line.replace(/^##\s+/, "").trim();
    }
    const match = line.match(/^- \[([ x])\] (.+)/);
    if (match) {
      items.push({
        checked: match[1] === "x",
        label: match[2].trim(),
        section: currentSection,
      });
    }
  }
  return items;
}

export default function TodoPage() {
  const md = loadTodo();
  const items = md ? parseTodoItems(md) : [];

  const sections = [...new Set(items.map((i) => i.section))];
  const done = items.filter((i) => i.checked).length;
  const total = items.length;

  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-800 text-v4-text">Plan d'action SEO</h1>
        {total > 0 && (
          <span className="font-sans text-sm font-600 text-v4-text-secondary bg-white border border-v4-border rounded-full px-3 py-1">
            {done}/{total} complétées
          </span>
        )}
      </div>

      {items.length === 0 && (
        <p className="font-sans text-v4-text-muted text-sm">
          Fichier <code className="bg-gray-100 px-1 rounded font-mono">docs/SEO/TODO.md</code> introuvable.
        </p>
      )}

      {sections.map((section) => {
        const sectionItems = items.filter((i) => i.section === section);
        return (
          <div key={section} className="space-y-3">
            <h2 className="font-sans text-xs font-800 uppercase tracking-wide text-v4-text-muted border-b border-v4-border pb-1">
              {section}
            </h2>
            <ul className="space-y-2">
              {sectionItems.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 font-sans text-sm rounded-lg px-3 py-2 ${item.checked ? "bg-gray-50 text-v4-text-muted line-through" : "bg-white border border-v4-border text-v4-text"}`}>
                  <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center text-xs ${item.checked ? "bg-emerald-100 border-emerald-300 text-emerald-600" : "border-gray-300"}`}>
                    {item.checked ? "x" : ""}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: item.label.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
