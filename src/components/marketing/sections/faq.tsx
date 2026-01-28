const faqs = [
  {
    q: "Is this a real SaaS product?",
    a: "No. All copy, pricing, and data are placeholders for a demo landing page and dashboard.",
  },
  {
    q: "Does it include real billing?",
    a: "Billing is a stub page. You can connect Stripe or another provider later.",
  },
  {
    q: "How is auth handled?",
    a: "Auth is stubbed with a Supabase-ready client and a simple route-guard pattern.",
  },
  {
    q: "Is it deployable?",
    a: "Yes. The structure is Netlify-ready and uses Next.js App Router.",
  },
];

export function FaqSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          FAQ
        </h2>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          Short answers to common questions.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950"
          >
            <div className="text-base font-semibold">{item.q}</div>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
