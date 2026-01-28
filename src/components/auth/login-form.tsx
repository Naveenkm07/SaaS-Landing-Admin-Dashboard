"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

import { AuthCard, AuthFooterLink } from "@/components/auth/auth-card";
import { useAuth } from "@/components/auth/auth-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/toast";

export function LoginForm({ nextUrl }: { nextUrl: string }) {
  const { signIn } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const [email, setEmail] = React.useState("demo@placeholder.local");
  const [password, setPassword] = React.useState("password");
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
      toast({
        title: "Signed in",
        description: "Welcome back. Redirecting to your dashboard.",
        variant: "success",
      });
      router.push(nextUrl);
    } catch (err) {
      toast({
        title: "Login failed",
        description: err instanceof Error ? err.message : "Please try again.",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title="Log in"
      subtitle="Access the demo dashboard with mocked auth or Supabase if configured."
    >
      <form className="space-y-4" onSubmit={onSubmit} aria-label="Login form">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/auth/forgot"
              className="text-sm text-zinc-600 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-zinc-400"
            >
              Forgot?
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Log in"}
        </Button>
      </form>

      <AuthFooterLink
        href="/auth/signup"
        text="New here?"
        cta="Create an account"
      />
    </AuthCard>
  );
}
