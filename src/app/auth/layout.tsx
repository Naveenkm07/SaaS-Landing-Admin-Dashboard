import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-zinc-50 px-4 py-12 dark:bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label="Go to homepage"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background">
            P
          </span>
          <span>Placeholder SaaS</span>
        </Link>
        {children}
      </div>
    </div>
  );
}
