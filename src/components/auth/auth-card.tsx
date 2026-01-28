import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        {subtitle ? (
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        ) : null}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export function AuthFooterLink({
  href,
  text,
  cta,
}: {
  href: string;
  text: string;
  cta: string;
}) {
  return (
    <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
      {text}{" "}
      <Link
        href={href}
        className="font-medium text-foreground underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {cta}
      </Link>
    </p>
  );
}
