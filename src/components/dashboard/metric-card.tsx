"use client";

import * as React from "react";
import { animate } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

export function MetricCard({
  label,
  value,
  suffix,
  decimals,
}: {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const controls = animate(0, value, {
      duration: 0.9,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <Card className="transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <CardContent>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">{label}</div>
        <div className="mt-2 text-3xl font-semibold tracking-tight">
          {display.toLocaleString(undefined, {
            minimumFractionDigits: decimals ?? 0,
            maximumFractionDigits: decimals ?? 0,
          })}
          {suffix ?? ""}
        </div>
      </CardContent>
    </Card>
  );
}
