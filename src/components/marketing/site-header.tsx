"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="Go to homepage"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-foreground text-background">
            P
          </span>
          <span>Placeholder SaaS</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-black/5 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-zinc-50",
                  active && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/auth/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-black/5 hover:text-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-zinc-50"
          >
            Log in
          </Link>
          <Link href="/auth/signup">
            <Button size="md">Start Free</Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-foreground shadow-sm transition-colors hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-white/10 dark:bg-zinc-950 dark:hover:bg-zinc-900 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-background dark:border-white/10 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-1 gap-2">
              <Link href="/auth/login">
                <Button variant="secondary" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="w-full">Start Free</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
