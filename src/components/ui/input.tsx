import * as React from "react";

import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-foreground shadow-sm transition-colors",
        "placeholder:text-zinc-500",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "dark:border-white/10 dark:bg-zinc-950 dark:placeholder:text-zinc-500",
        className,
      )}
      {...props}
    />
  );
}
