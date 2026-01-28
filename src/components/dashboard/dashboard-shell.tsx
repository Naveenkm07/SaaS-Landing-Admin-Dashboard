"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { BarChart3, CreditCard, LayoutDashboard, LogOut, Menu, Settings, X } from "lucide-react";

import { useAuth } from "@/components/auth/auth-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  async function onLogout() {
    await signOut();
    router.push("/");
  }

  return (
    <div className="min-h-dvh bg-zinc-50 dark:bg-black">
      <div className="mx-auto flex max-w-7xl">
        <aside className="hidden w-64 shrink-0 border-r border-black/10 bg-background p-4 dark:border-white/10 md:block">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-foreground text-background">
                P
              </span>
              <span>Placeholder SaaS</span>
            </Link>
          </div>

          <nav aria-label="Dashboard" className="mt-6 space-y-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                    active
                      ? "bg-foreground text-background"
                      : "text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10",
                  )}
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 rounded-2xl border border-black/10 bg-white p-4 text-sm dark:border-white/10 dark:bg-zinc-950">
            <div className="font-medium text-foreground">Signed in as</div>
            <div className="mt-1 truncate text-zinc-600 dark:text-zinc-400">
              {user?.email}
            </div>
          </div>

          <div className="mt-4">
            <Button variant="secondary" className="w-full" onClick={onLogout}>
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Log out
            </Button>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-40 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white text-foreground shadow-sm transition-colors hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-white/10 dark:bg-zinc-950 dark:hover:bg-zinc-900 md:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-foreground">
                  Dashboard
                </div>
                <div className="truncate text-xs text-zinc-500">
                  Plan: {user?.plan ?? "free"}
                </div>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <Button variant="secondary" size="sm" onClick={onLogout}>
                  <LogOut className="h-4 w-4" aria-hidden="true" />
                  Log out
                </Button>
              </div>
            </div>
          </header>

          {mobileOpen ? (
            <div className="fixed inset-0 z-50 md:hidden">
              <div
                className="absolute inset-0 bg-black/50"
                aria-hidden="true"
                onClick={() => setMobileOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] border-r border-black/10 bg-background p-4 dark:border-white/10">
                <nav aria-label="Dashboard mobile" className="mt-2 space-y-1">
                  {nav.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                          active
                            ? "bg-foreground text-background"
                            : "text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10",
                        )}
                      >
                        <item.icon className="h-4 w-4" aria-hidden="true" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-6">
                  <Button variant="secondary" className="w-full" onClick={onLogout}>
                    <LogOut className="h-4 w-4" aria-hidden="true" />
                    Log out
                  </Button>
                </div>
              </div>
            </div>
          ) : null}

          <main className="px-4 py-8 sm:px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
