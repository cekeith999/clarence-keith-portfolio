# Live Site Editing Setup Guide

## Overview
This system allows you to edit text directly on your live website (clarencekeith.com) and automatically save changes to GitHub.

## Setup Steps

### 1. Create GitHub Personal Access Token

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Live Editing"
4. Select these scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `public_repo` (Access public repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)

### 2. Add Token to Vercel

1. Go to your Vercel dashboard
2. Select your portfolio project
3. Go to Settings → Environment Variables
4. Add a new variable:
   - **Name**: `GITHUB_TOKEN`
   - **Value**: `your_github_token_here`
   - **Environment**: Production, Preview, Development
5. Click "Save"

### 3. Deploy to Vercel

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Add live editing functionality"
   git push origin main
   ```

2. Vercel will automatically deploy the changes

### 4. Test Live Editing

1. Go to your live site: `https://clarencekeith.com`
2. Hold `Ctrl` + `Alt` and double-click any text
3. Make your changes and press Enter
4. You should see a green success notification
5. Check your GitHub repository to see the commit

## How It Works

1. **User edits text** on live site using Ctrl+Alt+DoubleClick
2. **Frontend sends request** to `/api/save-edit` endpoint
3. **Vercel function** uses GitHub API to:
   - Get current file content
   - Update the content with new text
   - Commit changes to GitHub
4. **Vercel automatically redeploys** the site with new changes
5. **User sees success notification** with commit hash

## Troubleshooting

### "GitHub token not configured" Error
- Make sure you added the `GITHUB_TOKEN` environment variable in Vercel
- Redeploy your site after adding the token

### "Failed to get file" Error
- Check that your GitHub token has the correct permissions
- Verify the repository name and owner are correct in the API function

### Changes Not Appearing
- Vercel may take 1-2 minutes to redeploy after a commit
- Check the Vercel dashboard for deployment status
- Refresh your browser after a few minutes

## Security Notes

- The GitHub token is stored securely in Vercel environment variables
- Only you can edit the content (no public access to the API)
- All changes are logged in your GitHub commit history

## Features

- ✅ Edit any text element on live site
- ✅ Automatic file updates via GitHub API
- ✅ Automatic git commits with descriptive messages
- ✅ Real-time success/error notifications
- ✅ Secure token-based authentication
- ✅ Full change history in GitHub
