import type { Metadata } from "next";

import { ContactForm } from "@/components/marketing/contact-form";
import { PageShell, PageTitle } from "@/components/marketing/page-shell";
import { COPY } from "@/lib/content/copy";

export const metadata: Metadata = {
  title: "Contact · Placeholder SaaS",
  description: "Send a message to the demo team (UI stub).",
  openGraph: {
    title: "Contact · Placeholder SaaS",
    description: "Send a message to the demo team (UI stub).",
    images: ["/og.svg"],
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageTitle
        title={COPY.contact.title}
        description={COPY.contact.body}
      />
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Use this form to collect leads, support requests, or sales inquiries.
          </p>
          <div className="rounded-3xl border border-black/10 bg-white p-6 text-sm text-zinc-600 shadow-sm dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-400">
            <div className="font-semibold text-foreground">Response time</div>
            <p className="mt-2">Typically within 1–2 business days (placeholder).</p>
          </div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
          <ContactForm />
        </div>
      </div>
    </PageShell>
  );
}
