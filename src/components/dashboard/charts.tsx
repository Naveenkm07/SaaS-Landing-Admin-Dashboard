"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DashboardCharts } from "@/lib/models";

function ChartSkeleton() {
  return (
    <div className="h-[260px] w-full animate-pulse rounded-2xl bg-zinc-100 dark:bg-zinc-900" />
  );
}

export function SignupsLineCard({
  data,
  loading,
}: {
  data: DashboardCharts["userSignups"];
  loading?: boolean;
}) {
  return (
    <Card className="transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader>
        <CardTitle>User signups</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <ChartSkeleton />
        ) : (
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ left: 8, right: 8, top: 10 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} width={30} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="signups"
                  stroke="currentColor"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function UsageLineCard({
  data,
  loading,
}: {
  data: DashboardCharts["usageOverTime"];
  loading?: boolean;
}) {
  return (
    <Card className="transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader>
        <CardTitle>Usage over time</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <ChartSkeleton />
        ) : (
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ left: 8, right: 8, top: 10 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} width={30} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="currentColor"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function RevenueBarCard({
  data,
  loading,
}: {
  data: DashboardCharts["revenueGrowth"];
  loading?: boolean;
}) {
  return (
    <Card className="transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader>
        <CardTitle>Revenue growth</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <ChartSkeleton />
        ) : (
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ left: 8, right: 8, top: 10 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} width={40} />
                <Tooltip />
                <Bar dataKey="revenue" fill="currentColor" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
