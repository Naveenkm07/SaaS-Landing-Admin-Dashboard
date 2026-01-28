import * as React from "react";

import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: Props) {
  return <div className={cn("p-6 pb-2", className)} {...props} />;
}

export function CardTitle({ className, ...props }: Props) {
  return (
    <div
      className={cn("text-base font-semibold text-foreground", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: Props) {
  return (
    <div
      className={cn("text-sm text-zinc-600 dark:text-zinc-400", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: Props) {
  return <div className={cn("p-6 pt-4", className)} {...props} />;
}
