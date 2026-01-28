# Netlify Authentication Setup Guide

This guide explains how to connect your SaaS application to authentication providers and configure them properly on Netlify.

## Authentication Options

### Option 1: Supabase Authentication (Recommended)

Supabase provides a complete auth solution with database integration.

#### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" 
3. Sign up/login with GitHub, Google, or email
4. Create a new organization and project
5. Choose a database password and region
6. Wait for project to be created (2-3 minutes)

#### Step 2: Configure Authentication
1. In your Supabase dashboard, go to **Authentication** > **Settings**
2. Under **Site URL**, enter your Netlify URL: `https://your-project.netlify.app`
3. Under **Redirect URLs**, add:
   - `https://your-project.netlify.app/auth/callback`
   - `http://localhost:3000/auth/callback` (for local development)
4. Enable **Email** authentication provider
5. Configure email settings (or use default)

#### Step 3: Get Environment Variables
1. Go to **Project Settings** > **API**
2. Copy the **Project URL** and **anon public** key
3. Add these to Netlify environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

#### Step 4: Add to Netlify
1. Go to your Netlify site dashboard
2. **Site settings** > **Build & deploy** > **Environment**
3. Add the Supabase variables from Step 3

### Option 2: Firebase Authentication

Firebase is Google's authentication service with extensive provider support.

#### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Enter project name and continue
4. Enable Google Analytics (optional)
5. Wait for project creation

#### Step 2: Enable Authentication
1. In Firebase dashboard, go to **Authentication**
2. Click "Get started"
3. Under **Sign-in method**, enable **Email/Password**
4. Save configuration

#### Step 3: Configure Web App
1. Go to **Project Settings** > **General**
2. Under "Your apps", click the web icon (`</>`)
3. Enter app name and register app
4. Copy the `firebaseConfig` object values
5. Add these to Netlify environment variables:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   ```

#### Step 4: Add to Netlify
1. Go to your Netlify site dashboard
2. **Site settings** > **Build & deploy** > **Environment**
3. Add the Firebase variables from Step 3

## Email/Password Auth Setup

### For Supabase
1. In Supabase dashboard > Authentication > Settings
2. Ensure "Enable email confirmations" is set as desired
3. Configure email templates under **Auth** > **Email Templates**
4. Test by creating a test user in **Authentication** > **Users**

### For Firebase
1. In Firebase Console > Authentication > Sign-in method
2. Enable Email/Password
3. Configure email templates under **Authentication** > **Templates**
4. Test by creating a test user in **Authentication** > **Users**

## Netlify Dashboard Configuration

### Adding Environment Variables
1. **Site settings** > **Build & deploy** > **Environment**
2. Click "Edit variables"
3. Add each variable:
   - Key: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://your-project-id.supabase.co`
   - Click "Save"

### Testing Authentication
1. Deploy your site to Netlify
2. Visit your site and try to sign up
3. Check browser console for any configuration errors
4. Verify emails are sent for confirmation
5. Test login flow

## Common Issues and Solutions

### CORS Errors
- Ensure your redirect URLs are correctly configured
- Check that your site URL matches exactly (no trailing slash)

### Environment Variables Not Working
- Verify variables are prefixed with `NEXT_PUBLIC_`
- Check Netlify deploy logs for missing variable warnings
- Restart your Netlify functions after adding variables

### Email Not Sending
- For Supabase: Check email settings in Authentication > Settings
- For Firebase: Verify email service is enabled

### Auth Callback Failures
- Ensure redirect URLs match your deployed site URL
- Check that auth routes are properly configured in your app

## Security Best Practices

1. **Never expose secret keys** - only use public keys in client code
2. **Use HTTPS** - Netlify automatically provides SSL
3. **Enable email verification** - prevents fake signups
4. **Monitor auth logs** - check for suspicious activity
5. **Regular key rotation** - update auth keys periodically

## Next Steps

After setting up authentication:

1. Test the complete user flow (signup → email → login → dashboard)
2. Configure user roles and permissions
3. Set up analytics to track user behavior
4. Consider adding social login providers
5. Implement password reset functionality
