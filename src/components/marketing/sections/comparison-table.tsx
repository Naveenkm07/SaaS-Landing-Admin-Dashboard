const rows = [
  { label: "Projects", free: "1", pro: "10", business: "Unlimited" },
  { label: "Team members", free: "1", pro: "5", business: "Unlimited" },
  { label: "Basic analytics", free: "✓", pro: "✓", business: "✓" },
  { label: "Advanced analytics", free: "—", pro: "✓", business: "✓" },
  { label: "SSO (stub)", free: "—", pro: "—", business: "✓" },
  { label: "Support", free: "Community", pro: "Email", business: "Priority" },
];

export function FeatureComparisonTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-black/10 dark:border-white/10">
              <th className="px-6 py-4 font-semibold">Feature</th>
              <th className="px-6 py-4 font-semibold">Free</th>
              <th className="px-6 py-4 font-semibold">Pro</th>
              <th className="px-6 py-4 font-semibold">Business</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.label}
                className="border-b border-black/10 last:border-b-0 dark:border-white/10"
              >
                <td className="px-6 py-4 font-medium text-foreground">
                  {r.label}
                </td>
                <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                  {r.free}
                </td>
                <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                  {r.pro}
                </td>
                <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                  {r.business}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
