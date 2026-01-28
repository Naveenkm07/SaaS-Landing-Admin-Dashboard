import type { Metadata } from "next";

import { PageShell, PageTitle } from "@/components/marketing/page-shell";
import { FeatureComparisonTable } from "@/components/marketing/sections/comparison-table";
import { FeatureHighlightsSection } from "@/components/marketing/sections/feature-highlights";

export const metadata: Metadata = {
  title: "Features · Placeholder SaaS",
  description: "Explore the placeholder feature set for the demo SaaS landing page and dashboard.",
  openGraph: {
    title: "Features · Placeholder SaaS",
    description: "Explore the placeholder feature set for the demo SaaS landing page and dashboard.",
    images: ["/og.svg"],
  },
};

export default function FeaturesPage() {
  return (
    <div>
      <PageShell>
        <PageTitle
          title="Features"
          description="A concise feature list designed for a conversion-focused SaaS landing page."
        />
        <div className="rounded-3xl border border-black/10 bg-white p-6 text-sm text-zinc-600 shadow-sm dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-400">
          This is placeholder content. Replace these sections with your real product capabilities and screenshots.
        </div>
      </PageShell>

      <FeatureHighlightsSection />

      <PageShell className="pb-16 sm:pb-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Feature comparison
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            A simple table you can expand as your plans evolve.
          </p>
        </div>
        <div className="mt-10">
          <FeatureComparisonTable />
        </div>
      </PageShell>
    </div>
  );
}
