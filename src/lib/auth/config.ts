export const authConfig = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  },
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
  },
};

export const supabaseEnabled = Boolean(
  authConfig.supabase.url && authConfig.supabase.anonKey,
);

export const firebaseEnabled = Boolean(
  authConfig.firebase.apiKey &&
    authConfig.firebase.authDomain &&
    authConfig.firebase.projectId &&
    authConfig.firebase.appId,
);
