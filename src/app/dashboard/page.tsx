"use client";

import * as React from "react";

import { MetricCard } from "@/components/dashboard/metric-card";
import { UsageLineCard } from "@/components/dashboard/charts";
import { OnboardingCard } from "@/components/onboarding/onboarding-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DUMMY_CHARTS, DUMMY_METRICS } from "@/lib/dummy-data";

export default function DashboardOverviewPage() {
  const [loadingCharts, setLoadingCharts] = React.useState(true);

  React.useEffect(() => {
    const t = window.setTimeout(() => setLoadingCharts(false), 650);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Placeholder metrics and charts for the demo dashboard.
        </p>
      </div>

      <OnboardingCard />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Active users" value={DUMMY_METRICS.activeUsers} />
        <MetricCard
          label="Monthly revenue"
          value={DUMMY_METRICS.monthlyRevenue}
          suffix=""
        />
        <MetricCard label="API usage" value={DUMMY_METRICS.apiUsage} suffix="%" />
        <MetricCard
          label="Conversion rate"
          value={DUMMY_METRICS.conversionRate}
          decimals={1}
          suffix="%"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <UsageLineCard data={DUMMY_CHARTS.usageOverTime} loading={loadingCharts} />
        </div>
        <Card className="transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              This dashboard is wired to dummy models in <code>@/lib/models</code> and
              placeholder data in <code>@/lib/dummy-data</code>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
