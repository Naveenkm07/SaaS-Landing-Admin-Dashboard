import type {
  DashboardCharts,
  Metrics,
  OnboardingStep,
  User,
} from "@/lib/models";

export const DUMMY_USER: User = {
  id: "user_demo_001",
  email: "demo@placeholder.local",
  role: "admin",
  plan: "pro",
  name: "Demo User",
};

export const DUMMY_METRICS: Metrics = {
  activeUsers: 1248,
  monthlyRevenue: 12400,
  apiUsage: 78,
  conversionRate: 4.6,
};

export const DUMMY_CHARTS: DashboardCharts = {
  usageOverTime: [
    { date: "Mon", value: 42 },
    { date: "Tue", value: 56 },
    { date: "Wed", value: 49 },
    { date: "Thu", value: 71 },
    { date: "Fri", value: 64 },
    { date: "Sat", value: 58 },
    { date: "Sun", value: 73 },
  ],
  revenueGrowth: [
    { month: "Aug", revenue: 7200 },
    { month: "Sep", revenue: 8100 },
    { month: "Oct", revenue: 9400 },
    { month: "Nov", revenue: 11200 },
    { month: "Dec", revenue: 12400 },
  ],
  userSignups: [
    { date: "Week 1", signups: 120 },
    { date: "Week 2", signups: 180 },
    { date: "Week 3", signups: 210 },
    { date: "Week 4", signups: 260 },
  ],
};

export const DEFAULT_ONBOARDING: OnboardingStep[] = [
  {
    key: "complete_profile",
    title: "Complete your profile",
    description: "Add a display name and basic preferences.",
    completed: false,
  },
  {
    key: "create_first_project",
    title: "Create your first project",
    description: "Start tracking a new workspace with placeholder data.",
    completed: false,
  },
  {
    key: "view_analytics",
    title: "View analytics",
    description: "Open the analytics page to see charts and trends.",
    completed: false,
  },
];
