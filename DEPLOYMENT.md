# GitHub Pages Deployment Instructions

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name the repository: `huddlehivehack`
4. Make sure it's set to "Public" (required for free GitHub Pages)
5. Do NOT initialize with README, .gitignore, or license (since we already have files)
6. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

Run these commands in the project directory:

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/antallya/huddlehivehack.git

# Push your code to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The GitHub Actions workflow will automatically deploy your site

## Step 4: Access Your Live Website

After the deployment completes (usually takes 2-3 minutes), your website will be available at:
```
https://antallya.github.io/huddlehivehack/
```

## Automatic Deployments

Every time you push changes to the `main` branch, GitHub Actions will automatically:
1. Build your Nuxt 3 application
2. Generate static files
3. Deploy to GitHub Pages

## Local Development

To continue development locally:
```bash
npm run dev
```

To test the production build locally:
```bash
npm run generate
npx serve .output/public
```

## Features Included

✅ Modern logo design inspired by community-space-connect
✅ Responsive layout with Tailwind CSS
✅ PrimeVue component integration
✅ Tinder-style swipe matching
✅ Authentication pages
✅ Community and venue matching
✅ Automated GitHub Pages deployment
✅ SEO optimized with proper meta tags
✅ Progressive Web App ready

Your vennU website is now ready for the world! 🚀
