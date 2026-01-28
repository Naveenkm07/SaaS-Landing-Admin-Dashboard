"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PRICING_PLANS } from "@/lib/content/pricing";
import { COPY } from "@/lib/content/copy";

type Interval = "monthly" | "yearly";

export function PricingSection({ title = "Pricing" }: { title?: string }) {
  const [interval, setInterval] = React.useState<Interval>("monthly");

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
            {COPY.pricing.explanation}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white p-1 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <button
            type="button"
            className={cn(
              "relative h-10 rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
              interval === "monthly"
                ? "text-background"
                : "text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10",
            )}
            aria-pressed={interval === "monthly"}
            onClick={() => setInterval("monthly")}
          >
            {interval === "monthly" ? (
              <motion.span
                layoutId="pricing-interval"
                transition={{ type: "spring", stiffness: 450, damping: 36 }}
                className="absolute inset-0 rounded-full bg-foreground"
                aria-hidden="true"
              />
            ) : null}
            <span className="relative z-10">Monthly</span>
          </button>
          <button
            type="button"
            className={cn(
              "relative h-10 rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
              interval === "yearly"
                ? "text-background"
                : "text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10",
            )}
            aria-pressed={interval === "yearly"}
            onClick={() => setInterval("yearly")}
          >
            {interval === "yearly" ? (
              <motion.span
                layoutId="pricing-interval"
                transition={{ type: "spring", stiffness: 450, damping: 36 }}
                className="absolute inset-0 rounded-full bg-foreground"
                aria-hidden="true"
              />
            ) : null}
            <span className="relative z-10">Yearly</span>
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {PRICING_PLANS.map((p, idx) => {
          const price = interval === "monthly" ? p.priceMonthly : p.priceYearly;
          const suffix = interval === "monthly" ? "/mo" : "/yr";

          return (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className={cn(
                "rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950",
                p.highlight && "ring-2 ring-foreground dark:ring-zinc-50",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-base font-semibold">{p.name}</div>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {p.description}
                  </p>
                </div>
                {p.highlight ? (
                  <span className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
                    Popular
                  </span>
                ) : null}
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <div className="text-4xl font-semibold tracking-tight">
                  {price === 0 ? "$0" : `$${price}`}
                </div>
                <div className="text-sm text-zinc-500">{suffix}</div>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href={p.key === "business" ? "/contact" : "/auth/signup"}>
                  <Button
                    className="w-full"
                    variant={p.highlight ? "primary" : "secondary"}
                  >
                    {p.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
