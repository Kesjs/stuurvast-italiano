import { z } from "zod";
import { licenseCategories } from "@/data/license-categories";
import { packages } from "@/data/packages";

const naam = z
  .string()
  .trim()
  .min(2, "Inserisci il tuo nome.")
  .max(100, "Il nome è troppo lungo.");
const email = z
  .string()
  .trim()
  .email("Inserisci un indirizzo e-mail valido.")
  .max(200);
const telefoon = z
  .string()
  .trim()
  .max(30)
  .refine(
    (v) => v === "" || /^[0-9+()\-\s]{8,20}$/.test(v),
    "Inserisci un numero di telefono valido.",
  );
const toestemming = z.literal(true, {
  errorMap: () => ({
    message: "Acconsenti al trattamento dei tuoi dati.",
  }),
});

export const requestSchema = z.object({
  type: z.enum(["reservering", "contact"]),
  naam,
  email,
  telefoon: telefoon.optional().default(""),
  categorie: z
    .string()
    .trim()
    .refine(
      (v) => v === "" || licenseCategories.some((c) => c.code === v),
      "Scegli una patente valida.",
    )
    .optional()
    .default(""),
  pakket: z
    .string()
    .trim()
    .refine(
      (v) => v === "" || packages.some((p) => p.name === v),
      "Scegli un pacchetto valido.",
    )
    .optional()
    .default(""),
  bericht: z
    .string()
    .trim()
    .min(5, "Scrivi un breve messaggio.")
    .max(2000, "Il messaggio è troppo lungo."),
  toestemming,
  // anti-spam
  website: z.string().max(0).optional().default(""),
  startedAt: z.number().optional(),
});
export type RequestInput = z.infer<typeof requestSchema>;

export const checkoutSchema = z.object({
  slug: z.string().trim().min(1).max(40),
  naam,
  email,
  telefoon: telefoon.optional().default(""),
  toestemming,
  voorwaarden: z.literal(true, {
    errorMap: () => ({ message: "Accetta i termini e le condizioni." }),
  }),
  website: z.string().max(0).optional().default(""),
});
export type CheckoutInput = z.infer<typeof checkoutSchema>;

export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
