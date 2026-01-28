"use client";

import Link from "next/link";
import * as React from "react";
import { CheckCircle2 } from "lucide-react";

import { useAuth } from "@/components/auth/auth-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { OnboardingStep } from "@/lib/models";
import {
  completeStep,
  loadOnboarding,
  onboardingProgress,
  saveOnboarding,
  skipOnboarding,
} from "@/lib/onboarding";

export function OnboardingCard() {
  const { user } = useAuth();
  const [steps, setSteps] = React.useState<OnboardingStep[] | null>(null);

  React.useEffect(() => {
    if (!user) return;
    setSteps(loadOnboarding(user));
  }, [user]);

  if (!user) return null;
  if (!steps) return null;

  const authedUser = user;

  const progress = onboardingProgress(steps);
  const done = progress.completed === progress.total;

  if (done) return null;

  function markComplete(key: OnboardingStep["key"]) {
    const next = completeStep(authedUser, key);
    setSteps(next);
  }

  function onSkip() {
    const next = skipOnboarding(authedUser);
    setSteps(next);
  }

  return (
    <Card className="border-foreground/15">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>Get started</CardTitle>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Complete these steps to finish onboarding.
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onSkip} aria-label="Skip onboarding">
            Skip
          </Button>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-600 dark:text-zinc-400">
              {progress.completed}/{progress.total} completed
            </span>
            <span className="font-medium">{progress.percent}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
            <div
              className="h-full rounded-full bg-foreground transition-all"
              style={{ width: `${progress.percent}%` }}
              aria-hidden="true"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {steps.map((s) => {
            const content = (
              <div className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-zinc-950">
                <div className="mt-0.5">
                  <CheckCircle2
                    className={
                      s.completed
                        ? "h-5 w-5 text-emerald-500"
                        : "h-5 w-5 text-zinc-400"
                    }
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground">
                    {s.title}
                  </div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {s.description}
                  </div>
                </div>
              </div>
            );

            if (s.key === "complete_profile") {
              return (
                <li key={s.key}>
                  <Link
                    href="/dashboard/settings"
                    className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    aria-label="Go to settings to complete profile"
                    onClick={() => {
                      if (!s.completed) {
                        const next = steps.map((x) =>
                          x.key === s.key ? { ...x, completed: true } : x,
                        );
                        setSteps(next);
                        saveOnboarding(authedUser, next);
                      }
                    }}
                  >
                    {content}
                  </Link>
                </li>
              );
            }

            if (s.key === "view_analytics") {
              return (
                <li key={s.key}>
                  <Link
                    href="/dashboard/analytics"
                    className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    aria-label="Go to analytics"
                    onClick={() => {
                      if (!s.completed) {
                        markComplete(s.key);
                      }
                    }}
                  >
                    {content}
                  </Link>
                </li>
              );
            }

            return (
              <li key={s.key}>
                <button
                  type="button"
                  className="block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  aria-label={s.completed ? `${s.title} completed` : `Complete: ${s.title}`}
                  onClick={() => {
                    if (!s.completed) markComplete(s.key);
                  }}
                >
                  {content}
                </button>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
