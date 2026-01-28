"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { COPY } from "@/lib/content/copy";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-300"
            >
              {COPY.productName} · conversion-ready template
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              {COPY.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="max-w-xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            >
              {COPY.hero.subheading}
            </motion.p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/auth/signup">
                <Button size="lg">Start Free</Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="secondary">
                  View Demo Dashboard
                </Button>
              </Link>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              No credit card required · Cancel anytime
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-black/10 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-sm dark:border-white/10 dark:from-zinc-950 dark:to-zinc-950"
          >
            <div className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-950">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Weekly activity</div>
                <div className="text-xs text-zinc-500">Last 7 days</div>
              </div>
              <div className="mt-4 grid grid-cols-7 gap-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-16 rounded-xl bg-zinc-100 dark:bg-zinc-900"
                    style={{
                      opacity: 0.35 + (i / 10),
                    }}
                  />
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900">
                  <div className="text-xs text-zinc-500">Users</div>
                  <div className="mt-1 text-lg font-semibold">1,248</div>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900">
                  <div className="text-xs text-zinc-500">Revenue</div>
                  <div className="mt-1 text-lg font-semibold">$12.4k</div>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900">
                  <div className="text-xs text-zinc-500">Usage</div>
                  <div className="mt-1 text-lg font-semibold">78%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
