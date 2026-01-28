export type Plan = "free" | "pro" | "business";

export type Role = "user" | "admin";

export type User = {
  id: string;
  email: string;
  role: Role;
  plan: Plan;
  name?: string;
};

export type Metrics = {
  activeUsers: number;
  monthlyRevenue: number;
  apiUsage: number;
  conversionRate: number;
};

export type TimeseriesPoint = {
  date: string;
  value: number;
};

export type RevenuePoint = {
  month: string;
  revenue: number;
};

export type SignupPoint = {
  date: string;
  signups: number;
};

export type DashboardCharts = {
  usageOverTime: TimeseriesPoint[];
  revenueGrowth: RevenuePoint[];
  userSignups: SignupPoint[];
};

export type PricingPlan = {
  key: Plan;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  cta: string;
  description: string;
  highlight?: boolean;
};

export type OnboardingStepKey =
  | "complete_profile"
  | "create_first_project"
  | "view_analytics";

export type OnboardingStep = {
  key: OnboardingStepKey;
  title: string;
  description: string;
  completed: boolean;
};
