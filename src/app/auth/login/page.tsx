import { LoginForm } from "@/components/auth/login-form";

function normalizeNextUrl(nextUrl: unknown) {
  if (typeof nextUrl !== "string") return "/dashboard";
  if (!nextUrl.startsWith("/")) return "/dashboard";
  return nextUrl;
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ next?: string }>;
}) {
  const sp = searchParams ? await searchParams : undefined;
  const nextUrl = normalizeNextUrl(sp?.next);

  return <LoginForm nextUrl={nextUrl} />;
}
