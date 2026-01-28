import { FeatureComparisonTable } from "@/components/marketing/sections/comparison-table";
import { FaqSection } from "@/components/marketing/sections/faq";
import { FeatureHighlightsSection } from "@/components/marketing/sections/feature-highlights";
import { HeroSection } from "@/components/marketing/sections/hero";
import { LogosSection } from "@/components/marketing/sections/logos";
import { PricingSection } from "@/components/marketing/sections/pricing";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogosSection />
      <FeatureHighlightsSection />
      <PricingSection />
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Compare plans
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            A compact feature comparison table with placeholder values.
          </p>
        </div>
        <div className="mt-10">
          <FeatureComparisonTable />
        </div>
      </section>
      <FaqSection />
    </div>
  );
}
