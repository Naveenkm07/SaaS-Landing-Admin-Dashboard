"use client";

import { motion } from "framer-motion";
import { BarChart3, Lock, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Modern UI",
    description:
      "Tailwind-first components with clean spacing, contrast, and focus-visible states.",
  },
  {
    icon: Lock,
    title: "Auth-ready",
    description:
      "Supabase-ready stubs with route guarding for dashboard pages.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Recharts dashboards with dummy data and micro-animations.",
  },
  {
    icon: Zap,
    title: "Fast to customize",
    description:
      "A sane component structure so you can swap copy, colors, and layout quickly.",
  },
];

export function FeatureHighlightsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you need to launch a SaaS site
        </h2>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          Placeholder content only. The goal is a production-ready structure that
          you can brand later.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
              <f.icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="mt-4 text-base font-semibold">{f.title}</div>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {f.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
