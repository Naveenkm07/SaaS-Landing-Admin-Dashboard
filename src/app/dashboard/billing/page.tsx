import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardBillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Billing is a stub. Connect your payment provider later.
        </p>
      </div>

      <Card className="transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
        <CardHeader>
          <CardTitle>Plan & invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            This page is intentionally minimal. Add Stripe customer portal links,
            invoices, and subscription management as needed.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
