export const site = {
  name: "Patente Stuurvast",
  tagline: "La tua patente, passo dopo passo",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://patentestuurvast.it",
  address: "Utrecht e comuni limitrofi",
  street: "",
  postalCode: "",
  city: "Utrecht",
  phone: "+39 351 190 6654",
  phoneHref: "tel:+393511906654",
  email: process.env.EMAIL_TO ?? "contact@patentestuurvast.it",
  emailHref: `mailto:${process.env.EMAIL_TO ?? "contact@patentestuurvast.it"}`,
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
