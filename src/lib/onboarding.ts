import type { OnboardingStep, OnboardingStepKey, User } from "@/lib/models";
import { DEFAULT_ONBOARDING } from "@/lib/dummy-data";

function keyForUser(userId: string) {
  return `placeholder_onboarding_${userId}`;
}

export function loadOnboarding(user: User): OnboardingStep[] {
  try {
    const raw = localStorage.getItem(keyForUser(user.id));
    if (!raw) return DEFAULT_ONBOARDING;
    return JSON.parse(raw) as OnboardingStep[];
  } catch {
    return DEFAULT_ONBOARDING;
  }
}

export function saveOnboarding(user: User, steps: OnboardingStep[]) {
  try {
    localStorage.setItem(keyForUser(user.id), JSON.stringify(steps));
  } catch {
    return;
  }
}

export function completeStep(
  user: User,
  stepKey: OnboardingStepKey,
): OnboardingStep[] {
  const steps = loadOnboarding(user).map((s) =>
    s.key === stepKey ? { ...s, completed: true } : s,
  );
  saveOnboarding(user, steps);
  return steps;
}

export function skipOnboarding(user: User): OnboardingStep[] {
  const steps = loadOnboarding(user).map((s) => ({ ...s, completed: true }));
  saveOnboarding(user, steps);
  return steps;
}

export function onboardingProgress(steps: OnboardingStep[]) {
  const completed = steps.filter((s) => s.completed).length;
  const total = steps.length || 1;
  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100),
  };
}
