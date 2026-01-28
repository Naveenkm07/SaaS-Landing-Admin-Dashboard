import type { Metadata } from "next";

import { RequireAuth } from "@/components/auth/require-auth";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";

export const metadata: Metadata = {
  title: "Dashboard · Placeholder SaaS",
  description: "Your demo dashboard overview with placeholder analytics.",
  openGraph: {
    title: "Dashboard · Placeholder SaaS",
    description: "Your demo dashboard overview with placeholder analytics.",
    images: ["/og.svg"],
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireAuth>
      <DashboardShell>{children}</DashboardShell>
    </RequireAuth>
  );
}
