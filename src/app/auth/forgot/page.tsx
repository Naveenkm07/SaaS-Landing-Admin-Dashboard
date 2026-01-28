"use client";

import Link from "next/link";
import * as React from "react";

import { AuthCard } from "@/components/auth/auth-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/toast";

export default function ForgotPasswordPage() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 650));
      toast({
        title: "Check your inbox",
        description:
          "If this were connected to a backend, a reset link would be sent.",
        variant: "success",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      title="Reset password"
      subtitle="This is a UI stub. Connect your auth provider to send real reset emails."
    >
      <form className="space-y-4" onSubmit={onSubmit} aria-label="Forgot password form">
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
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending..." : "Send reset link"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm">
        <Link
          href="/auth/login"
          className="font-medium text-foreground underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Back to login
        </Link>
      </p>
    </AuthCard>
  );
}
