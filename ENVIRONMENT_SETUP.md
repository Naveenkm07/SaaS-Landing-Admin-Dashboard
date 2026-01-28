# Environment Variables Setup

This document outlines all environment variables needed for the SaaS Landing Dashboard deployment on Netlify.

## Required Environment Variables

### Option 1: Supabase Authentication
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Option 2: Firebase Authentication
```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
```

### Business Configuration
```bash
# Business URL (used for redirects and callbacks)
BUSINESS_URL=https://your-domain.netlify.app
```

## How to Get These Values

### Supabase Setup
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Navigate to Project Settings > API
3. Copy the Project URL and `anon` public key
4. Enable authentication in Authentication > Settings
5. Configure email/password auth providers

### Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. Enable Authentication service
4. In Authentication > Sign-in method, enable Email/Password
5. Go to Project Settings > General > Your apps
6. Copy the Web API key and Auth domain

### Business URL
1. After deploying to Netlify, your URL will be: `https://your-project-name.netlify.app`
2. If using custom domain, use that instead

## Netlify Environment Variables Setup

1. Go to your Netlify site dashboard
2. Navigate to Site settings > Build & deploy > Environment
3. Click "Edit variables" and add each variable:
   - Click "Add variable"
   - Enter the key (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
   - Enter the value
   - Click "Save"

## Local Development

Create a `.env.local` file in your project root:

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
BUSINESS_URL=http://localhost:3000
```

**Important**: Never commit `.env.local` to version control. It's already included in `.gitignore`.

## Security Notes

- Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Server-side only variables should not have the `NEXT_PUBLIC_` prefix
- Never include real credentials in your code
- Use different keys for development and production
- Regularly rotate your authentication keys

## Testing Environment Variables

After setting up environment variables, test them by:

1. Checking Netlify deploy logs for any missing variable warnings
2. Testing signup/login functionality
3. Verifying API calls work correctly
4. Checking browser console for any configuration errors
