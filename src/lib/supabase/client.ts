import { createClient } from "@supabase/supabase-js";

import { authConfig, supabaseEnabled as supabaseEnabledFlag } from "@/lib/auth/config";

export const supabaseUrl = authConfig.supabase.url;
export const supabaseAnonKey = authConfig.supabase.anonKey;

export const supabaseEnabled = supabaseEnabledFlag;

export const supabase = supabaseEnabled
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null;
