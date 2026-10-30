import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { CategoryCard } from "@/components/category/CategoryCard";
import { CtaBand } from "@/components/ui/CtaBand";
import { licenseCategories } from "@/data/license-categories";
import { priceDisclaimer } from "@/data/site";

export const metadata: Metadata = {
  title: "Patenti di guida",
  description:
    "Scopri le categorie di patente italiane AM, A1, A2, A, B1, B, BE, C1, C, CE, D1, D e DE, con stime indicative.",
};

export default function RijbewijzenPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Patenti di guida"
        image={{
          src: "/images/categories.webp",
          alt: "Diversi veicoli per la formazione alla guida",
        }}
        title="Scegli la patente adatta a te"
        intro="Una panoramica chiara delle categorie italiane. Seleziona una categoria per vedere veicoli, requisiti e percorso."
      />
      <Section tone="gray">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {licenseCategories.map((c) => (
            <CategoryCard key={c.slug} cat={c} />
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-[14px] text-slate">
          {priceDisclaimer}
        </p>
      </Section>
      <CtaBand />
    </main>
  );
}
