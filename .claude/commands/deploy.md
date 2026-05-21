Build and deploy the portfolio site. The argument may specify a target: "vercel" or "netlify". If not specified, ask.

Steps:
1. Determine deploy target from $ARGUMENTS or ask: "Where do you want to deploy? (vercel / netlify)"

2. Run a production build first to catch any errors:
   ```
   npm run build
   ```
   If the build fails, stop and report the errors. Do not proceed to deploy.

3. On successful build, deploy:

   **Vercel:**
   - Check if Vercel CLI is installed: `which vercel`
   - If not: `npm install -g vercel`
   - Run: `vercel --prod`
   - The CLI will prompt for login if needed

   **Netlify:**
   - Check if Netlify CLI is installed: `which netlify`
   - If not: `npm install -g netlify-cli`
   - Run: `netlify deploy --dir=dist --prod`
   - The CLI will prompt for login and site selection if needed

4. Report back:
   - Build output summary (number of pages, bundle size)
   - Deploy URL once available
   - Any warnings from the build output worth noting
