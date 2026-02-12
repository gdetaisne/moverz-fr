import { z } from "zod";

/**
 * Schéma de validation pour le formulaire d'entrée du tunnel
 */
export const tunnelEntrySchema = z.object({
  fromCity: z
    .string()
    .min(2, "Veuillez saisir une ville de départ")
    .max(100, "Ville trop longue"),
  toCity: z
    .string()
    .min(2, "Veuillez saisir une ville d'arrivée")
    .max(100, "Ville trop longue"),
  areaM2: z
    .number({ invalid_type_error: "Veuillez saisir un nombre" })
    .min(10, "Surface minimum : 10 m²")
    .max(500, "Surface maximum : 500 m²"),
});

export type TunnelEntryData = z.infer<typeof tunnelEntrySchema>;
