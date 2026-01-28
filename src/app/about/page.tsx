import type { Metadata } from "next";

import { PageShell, PageTitle } from "@/components/marketing/page-shell";
import { COPY } from "@/lib/content/copy";

export const metadata: Metadata = {
  title: "About · Placeholder SaaS",
  description: "About this demo SaaS landing page and dashboard template.",
  openGraph: {
    title: "About · Placeholder SaaS",
    description: "About this demo SaaS landing page and dashboard template.",
    images: ["/og.svg"],
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageTitle
        title={COPY.about.title}
        description="A short, professional explanation of what this demo project is."
      />
      <div className="prose max-w-none prose-zinc dark:prose-invert">
        <p>{COPY.about.body}</p>
      </div>
    </PageShell>
  );
}
