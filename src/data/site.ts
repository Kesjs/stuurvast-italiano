export const site = {
  name: "Stuurvast Autoscuola",
  tagline: "La tua patente, passo dopo passo",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://stuurvast-italia.vercel.app",
  address: "Utrecht e comuni limitrofi",
  street: "",
  postalCode: "",
  city: "Utrecht",
  phone: "06 12 34 56 78",
  phoneHref: "tel:+31612345678",
  email: process.env.EMAIL_TO ?? "contact@stuurvast-italia.nl",
  emailHref: `mailto:${process.env.EMAIL_TO ?? "contact@stuurvast-italia.nl"}`,
  kvk: "",
  serviceArea: "Utrecht e comuni limitrofi",
  // Horaires: à compléter par Stuurvast. Laisser vide tant que non confirmés.
  hours: [] as { days: string; time: string }[],
};

export const nav = [
  { label: "Patenti", href: "/rijbewijzen" },
  { label: "Pacchetti", href: "/pakketten" },
  { label: "Teoria", href: "/theorie" },
  { label: "Chi siamo", href: "/over-ons" },
  { label: "Istruttori", href: "/instructeurs" },
];

export const priceDisclaimer =
  "Prezzi indicativi del mercato olandese nel 2026. Il costo finale dipende dal tuo livello e dal numero di lezioni necessarie.";
