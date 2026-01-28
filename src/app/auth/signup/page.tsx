"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

import { AuthCard, AuthFooterLink } from "@/components/auth/auth-card";
import { useAuth } from "@/components/auth/auth-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/toast";

export default function SignupPage() {
  const { signUp } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp(email, password);
      toast({
        title: "Account created",
        description: "You’re signed in. Let’s finish onboarding.",
        variant: "success",
      });
      router.push("/dashboard");
    } catch (err) {
      toast({
        title: "Signup failed",
        description: err instanceof Error ? err.message : "Please try again.",
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title="Create account"
      subtitle="This creates a mocked session (or a Supabase user if configured)."
    >
      <form className="space-y-4" onSubmit={onSubmit} aria-label="Signup form">
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
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            required
            minLength={6}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating..." : "Sign up"}
        </Button>
      </form>

      <AuthFooterLink href="/auth/login" text="Already have an account?" cta="Log in" />
    </AuthCard>
  );
}
