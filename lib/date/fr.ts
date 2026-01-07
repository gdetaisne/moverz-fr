export function formatDateFR(
  value: string,
  opts?: Intl.DateTimeFormatOptions
): string {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("fr-FR", {
    // Hard rule: site FR → always Gregorian calendar + latin digits, regardless of server locale (e.g. Thailand).
    calendar: "gregory",
    numberingSystem: "latn",
    timeZone: "Europe/Paris",
    ...opts,
  }).format(d);
}


