"use client";

import { usePathname } from "next/navigation";

import { SiteFooter } from "./marketing/site-footer";
import { SiteHeader } from "./marketing/site-header";

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isAuth = pathname.startsWith("/auth");

  if (isDashboard || isAuth) return <>{children}</>;

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="pt-16">{children}</main>
      <SiteFooter />
    </div>
  );
}
