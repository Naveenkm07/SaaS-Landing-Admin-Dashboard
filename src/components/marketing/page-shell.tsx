import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 py-12 sm:px-6", className)}>
      {children}
    </div>
  );
}

export function PageTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10 max-w-2xl">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      ) : null}
    </header>
  );
}
