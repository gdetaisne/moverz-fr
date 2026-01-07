process.env.NODE_ENV = "test";
process.env.SITE_URL = process.env.SITE_URL || "https://moverz.fr";

// Defense-in-depth: even if some code forgets to pass timeZone/calendar explicitly,
// keep the process timezone aligned with the French site intent.
process.env.TZ = "Europe/Paris";


