"use client";

import * as React from "react";

import type { User } from "@/lib/models";
import { DUMMY_USER, DEFAULT_ONBOARDING } from "@/lib/dummy-data";
import { supabase, supabaseEnabled } from "@/lib/supabase/client";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = React.createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "placeholder_saas_session";

function readStoredUser(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}

function writeStoredUser(user: User | null) {
  try {
    if (!user) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch {
    return;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (supabaseEnabled && supabase) {
      supabase.auth.getUser().then(({ data }) => {
        if (data.user?.email) {
          setUser({
            id: data.user.id,
            email: data.user.email,
            role: "user",
            plan: "free",
          });
        } else {
          setUser(readStoredUser());
        }
        setLoading(false);
      });
      return;
    }

    setUser(readStoredUser());
    setLoading(false);
  }, []);

  const signUp = React.useCallback(async (email: string, password: string) => {
    if (!email || !password) throw new Error("Missing credentials");

    if (supabaseEnabled && supabase) {
      const res = await supabase.auth.signUp({ email, password });
      if (res.error) throw res.error;
      const next: User = {
        id: res.data.user?.id ?? crypto.randomUUID(),
        email,
        role: "user",
        plan: "free",
      };
      setUser(next);
      writeStoredUser(next);
      localStorage.setItem(
        `placeholder_onboarding_${next.id}`,
        JSON.stringify(DEFAULT_ONBOARDING),
      );
      return;
    }

    const next: User = {
      ...DUMMY_USER,
      id: crypto.randomUUID(),
      email,
      plan: "free",
      role: "user",
    };

    setUser(next);
    writeStoredUser(next);
    localStorage.setItem(
      `placeholder_onboarding_${next.id}`,
      JSON.stringify(DEFAULT_ONBOARDING),
    );
  }, []);

  const signIn = React.useCallback(async (email: string, password: string) => {
    if (!email || !password) throw new Error("Missing credentials");

    if (supabaseEnabled && supabase) {
      const res = await supabase.auth.signInWithPassword({ email, password });
      if (res.error) throw res.error;
      if (!res.data.user?.email) throw new Error("Login failed");
      const next: User = {
        id: res.data.user.id,
        email: res.data.user.email,
        role: "user",
        plan: "free",
      };
      setUser(next);
      writeStoredUser(next);
      return;
    }

    const next: User = {
      ...DUMMY_USER,
      id: crypto.randomUUID(),
      email,
      plan: "pro",
      role: "admin",
    };

    setUser(next);
    writeStoredUser(next);

    const key = `placeholder_onboarding_${next.id}`;
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(DEFAULT_ONBOARDING));
    }
  }, []);

  const signOut = React.useCallback(async () => {
    if (supabaseEnabled && supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
    writeStoredUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
