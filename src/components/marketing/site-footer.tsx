import Link from "next/link";

const links = [
  {
    title: "Product",
    items: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/dashboard", label: "Dashboard" },
    ],
  },
  {
    title: "Company",
    items: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-background dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <div className="text-base font-semibold tracking-tight">
              Placeholder SaaS
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Placeholder copy and dummy data only. Built as a modern SaaS demo.
            </p>
          </div>

          {links.map((group) => (
            <div key={group.title} className="space-y-3">
              <div className="text-sm font-semibold text-foreground">
                {group.title}
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-zinc-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Placeholder SaaS</div>
          <div>All content is placeholder.</div>
        </div>
      </div>
    </footer>
  );
}
