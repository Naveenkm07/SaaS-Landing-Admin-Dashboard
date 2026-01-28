import type { PricingPlan } from "@/lib/models";

export const PRICING_PLANS: PricingPlan[] = [
  {
    key: "free",
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    description: "For trying the product with placeholder data.",
    features: ["1 project", "Basic analytics", "Community support"],
    cta: "Get started",
  },
  {
    key: "pro",
    name: "Pro",
    priceMonthly: 19,
    priceYearly: 190,
    description: "For small teams that want more usage and insights.",
    features: ["10 projects", "Advanced analytics", "Email support"],
    cta: "Start trial",
    highlight: true,
  },
  {
    key: "business",
    name: "Business",
    priceMonthly: 49,
    priceYearly: 490,
    description: "For growing orgs that need scale and controls.",
    features: ["Unlimited projects", "SSO (stub)", "Priority support"],
    cta: "Contact sales",
  },
];
