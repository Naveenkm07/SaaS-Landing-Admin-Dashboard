"use client";

import * as React from "react";

import {
  RevenueBarCard,
  SignupsLineCard,
  UsageLineCard,
} from "@/components/dashboard/charts";
import { useAuth } from "@/components/auth/auth-provider";
import { DUMMY_CHARTS } from "@/lib/dummy-data";
import { completeStep } from "@/lib/onboarding";

export default function DashboardAnalyticsPage() {
  const { user } = useAuth();
  const [loadingCharts, setLoadingCharts] = React.useState(true);

  React.useEffect(() => {
    const t = window.setTimeout(() => setLoadingCharts(false), 650);
    return () => window.clearTimeout(t);
  }, []);

  React.useEffect(() => {
    if (!user) return;
    completeStep(user, "view_analytics");
  }, [user]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Charts are powered by Recharts and use placeholder time series.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <UsageLineCard data={DUMMY_CHARTS.usageOverTime} loading={loadingCharts} />
        <RevenueBarCard data={DUMMY_CHARTS.revenueGrowth} loading={loadingCharts} />
        <SignupsLineCard data={DUMMY_CHARTS.userSignups} loading={loadingCharts} />
      </div>
    </div>
  );
}
