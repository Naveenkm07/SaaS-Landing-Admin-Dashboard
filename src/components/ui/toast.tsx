"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

type ToastVariant = "success" | "error";

type Toast = {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
};

type ToastContextValue = {
  toast: (t: Omit<Toast, "id">) => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback((t: Omit<Toast, "id">) => {
    const id = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
    const next: Toast = { id, ...t };
    setToasts((prev) => [next, ...prev].slice(0, 3));

    window.setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id));
    }, 4500);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        className="fixed inset-x-0 top-4 z-[100] mx-auto flex max-w-md flex-col gap-2 px-4 sm:right-4 sm:left-auto sm:top-4 sm:px-0"
        role="region"
        aria-label="Notifications"
      >
        <AnimatePresence initial={false}>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "rounded-2xl border bg-background px-4 py-3 shadow-lg",
                t.variant === "success" && "border-emerald-500/30",
                t.variant === "error" && "border-red-500/30",
              )}
            >
              <div className="text-sm font-semibold">{t.title}</div>
              {t.description ? (
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {t.description}
                </div>
              ) : null}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}
