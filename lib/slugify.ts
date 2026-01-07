export function slugifyCityName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .toLowerCase()
    .replace(/['’]/g, "") // remove apostrophes
    .replace(/&/g, " et ")
    .replace(/[^a-z0-9]+/g, "-") // non-alphanum -> -
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}


