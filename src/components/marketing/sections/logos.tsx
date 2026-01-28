export function LogosSection() {
  return (
    <section aria-label="Social proof" className="border-y border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Trusted by teams at
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm font-semibold text-zinc-500 dark:text-zinc-500 sm:grid-cols-3 md:grid-cols-6">
          {[
            "PlaceholderCo",
            "Acme",
            "Northwind",
            "Globex",
            "Initech",
            "Umbrella",
          ].map((name) => (
            <div
              key={name}
              className="rounded-2xl border border-black/10 bg-white py-4 dark:border-white/10 dark:bg-zinc-950"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
