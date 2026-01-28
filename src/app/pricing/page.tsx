import type { Metadata } from "next";

import { PageShell, PageTitle } from "@/components/marketing/page-shell";
import { FeatureComparisonTable } from "@/components/marketing/sections/comparison-table";
import { FaqSection } from "@/components/marketing/sections/faq";
import { PricingSection } from "@/components/marketing/sections/pricing";

export const metadata: Metadata = {
  title: "Pricing · Placeholder SaaS",
  description: "Simple, transparent placeholder pricing for the SaaS demo.",
  openGraph: {
    title: "Pricing · Placeholder SaaS",
    description: "Simple, transparent placeholder pricing for the SaaS demo.",
    images: ["/og.svg"],
  },
};

export default function PricingPage() {
  return (
    <div>
      <PageShell>
        <PageTitle
          title="Pricing"
          description="Placeholder plans to demonstrate a toggle, cards, and plan comparison."
        />
      </PageShell>

      <PricingSection title="Choose a plan" />

      <PageShell className="pb-16 sm:pb-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Compare plans
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            Replace placeholder rows with your real limits and benefits.
          </p>
        </div>
        <div className="mt-10">
          <FeatureComparisonTable />
        </div>
      </PageShell>

      <FaqSection />
    </div>
  );
}
