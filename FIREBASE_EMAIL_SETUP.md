# 🔧 Firebase Email Authentication Setup

## Issue: Not Receiving Verification Emails

If you're not receiving verification emails, follow these steps:

---

## Step 1: Enable Email/Password Authentication

1. Go to https://console.firebase.google.com/
2. Select your project: **mw-study-app**
3. Click **"Authentication"** in the left sidebar
4. Click **"Sign-in method"** tab (at the top)
5. Find **"Email/Password"** in the list of providers
6. Click on it to expand
7. Make sure **both toggles are ENABLED:**
   - ✅ Enable (main toggle - should be ON)
   - ✅ Email link (passwordless sign-in) - can be OFF (we're using password)

**If it's disabled, you need to:**
1. Click the "Email/Password" row
2. Toggle "Enable" to ON
3. Click "Save"

---

## Step 2: Check Email Template Settings

1. In Firebase Console → Authentication
2. Click **"Templates"** tab (next to "Sign-in method")
3. You should see templates for:
   - Email address verification
   - Password reset
   - Email address change
   - SMS verification

4. Click **"Email address verification"** (pencil icon to edit)
5. Verify these settings:
   - **From name:** Should show your project name
   - **Reply-to email:** Optional
   - **Customize template:** You can edit the email text here

---

## Step 3: Check for Email Sending Errors

### In Browser Console:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Try signing up again with a new email
4. Look for any red errors
5. Common errors:
   - "CONFIGURATION_NOT_FOUND" → Email/password auth not enabled
   - "INVALID_EMAIL" → Email format is wrong
   - "TOO_MANY_ATTEMPTS_TRY_LATER" → Rate limited (wait 1 hour)

### In Firebase Console:
1. Go to Firebase Console → Authentication
2. Click **"Users"** tab
3. Check if your account appears in the list
   - If it's there → Account created, email might be delayed
   - If not there → Signup failed (check console errors)

---

## Step 4: Alternative Testing Method

If emails still aren't working, you can test without verification:

### Option A: Skip Email Verification for Testing
Since the app allows users to log in without verifying, you can:
1. Sign up with any email (even fake ones like `test@test.com`)
2. Log in immediately
3. Use the app normally
4. The yellow verification banner will show but app works fine

### Option B: Use Email Link Authentication (No Password)
1. Firebase Console → Authentication → Sign-in method
2. Enable "Email link (passwordless sign-in)"
3. Users get a magic link to log in (no password needed)

---

## Step 5: Check Spam/Junk Folder

Firebase emails sometimes end up in spam:
- Check your spam/junk folder
- Look for emails from: `noreply@mw-study-app.firebaseapp.com`
- Subject: "Verify your email for mw-study-app"

---

## Step 6: Test with Different Email Provider

Try signing up with emails from different providers:
- Gmail
- Outlook/Hotmail
- Yahoo
- Your school email

Some email providers are more strict than others.

---

## Common Issues & Solutions

### Issue: "Email already in use"
**Solution:** That email is already registered. Either:
- Log in with that email instead
- Use password reset if you forgot password
- Use a different email to test

### Issue: Email never arrives (after 10+ minutes)
**Possible causes:**
1. Email/password auth not enabled in Firebase Console
2. Email in spam folder
3. Email provider blocking Firebase emails
4. Firebase quota exceeded (unlikely with new project)

**Solutions:**
1. Verify Email/Password is enabled (Step 1 above)
2. Check spam folder
3. Try different email provider
4. Check Firebase Console → Usage to see if quota exceeded

### Issue: "CONFIGURATION_NOT_FOUND" error in console
**Solution:** Email/Password authentication is not enabled in Firebase Console. Follow Step 1 above.

### Issue: Email arrives but link doesn't work
**Possible causes:**
1. Link expired (24 hours for verification, 1 hour for password reset)
2. Link already used
3. Domain not authorized

**Solutions:**
1. Click "Resend Email" to get fresh link
2. Add localhost to authorized domains:
   - Firebase Console → Authentication → Settings
   - Scroll to "Authorized domains"
   - Verify `localhost` is in the list
   - Add if missing

---

## Quick Test: Does Firebase Email Work?

Run this quick test:

1. **Sign up with a new email**
2. **Open Browser Console (F12)**
3. **Look for this:**
   - ✅ No errors = Account created successfully
   - ❌ Red error = Check error message for details

4. **Check Firebase Console → Authentication → Users**
   - ✅ Account appears = Signup worked, email might be delayed
   - ❌ No account = Signup failed (check console error)

5. **Wait 2-3 minutes** and check email again
   - Sometimes Gmail/Outlook delay Firebase emails

---

## Alternative: Send Verification Email Manually

If you successfully logged in but didn't get the verification email, you can trigger it manually:

### From the App:
1. Log in to your account
2. You should see the yellow "Email not verified" banner
3. Click **"Resend Email"** button
4. Check your email again

### From Browser Console (Advanced):
If you're logged in, you can manually trigger it:
```javascript
// In browser console:
import('firebase/auth').then(({ getAuth, sendEmailVerification }) => {
  const auth = getAuth();
  sendEmailVerification(auth.currentUser)
    .then(() => console.log('Email sent!'))
    .catch(err => console.error('Error:', err));
});
```

---

## Still Not Working?

If you've tried everything above and still no email:

### Option 1: Use the App Without Verification
- The app works fine without email verification
- You'll just see the yellow banner
- All features (games, progress, etc.) work normally
- You just can't reset your password if you forget it

### Option 2: Contact Support
This is unusual - Firebase email should work out of the box. If it's not working:
1. Share any console errors you see
2. Check if account appears in Firebase Console → Users
3. Verify Email/Password is enabled in Sign-in methods

---

## What to Check Right Now

Please check these and let me know what you find:

1. **Firebase Console → Authentication → Sign-in method**
   - Is "Email/Password" enabled? (Should show green checkmark)

2. **Browser Console (F12)**
   - Any red errors when you sign up?
   - What do they say?

3. **Firebase Console → Authentication → Users**
   - Does your account appear in the list?
   - What's the "Providers" column say? (should be "password")

4. **Email spam folder**
   - Any emails from Firebase?

Let me know what you find and we'll fix it! 🔧
