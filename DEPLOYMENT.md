# Cactus Digital Media — Deployment Guide

## Overview

This is a **full-stack web application** built with:
- **Frontend:** React 19 + Vite + Tailwind CSS 4
- **Backend:** Express.js + tRPC 11
- **Database:** MySQL/TiDB (optional)
- **Authentication:** Manus OAuth

The project includes both a **client-side SPA** and a **server-side API**. Different deployment strategies apply depending on your hosting provider.

---

## Deployment Options

### 1. **cPanel/Shared Hosting** (Recommended for this project)

#### Prerequisites
- SSH access to your cPanel server
- Node.js 18+ installed on server
- Apache with `mod_rewrite` enabled

#### Steps

1. **Build the project locally:**
   ```bash
   pnpm build
   ```
   This creates:
   - `dist/public/` — Frontend static files (HTML, CSS, JS)
   - `dist/index.js` — Backend server

2. **Upload to cPanel:**
   - Upload the entire `dist/` folder to your public_html or subdomain directory
   - Upload `package.json` and `pnpm-lock.yaml` to the root

3. **Install dependencies on server:**
   ```bash
   cd /path/to/public_html
   pnpm install --prod
   ```

4. **Start the server:**
   - Use cPanel's Node.js app manager, or
   - Create a startup script in cPanel's "Startup Scripts"
   - Or use PM2 for process management:
     ```bash
     pnpm add -g pm2
     pm2 start dist/index.js --name "cactus-digital-media"
     pm2 startup
     pm2 save
     ```

5. **Configure reverse proxy:**
   - In cPanel, set up a reverse proxy to route `/api/*` requests to your Node.js backend
   - Frontend requests are served directly from `dist/public/`

6. **SPA Routing (.htaccess):**
   - The `.htaccess` file in `dist/public/` is already configured for SPA routing
   - It rewrites all non-existent routes to `index.html` so React Router works correctly
   - Ensure Apache `mod_rewrite` is enabled

---

### 2. **Netlify** (Frontend Only - Not Recommended)

**Note:** This project has a backend server, so Netlify alone won't work. You'd need:
- Netlify for frontend (with `netlify.toml` configuration)
- Separate backend hosting (Render, Railway, Heroku, etc.)

If you want to deploy frontend-only to Netlify:

1. Create `netlify.toml` in project root:
   ```toml
   [build]
   command = "pnpm build"
   publish = "dist/public"

   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```

2. Connect your GitHub repo to Netlify
3. Deploy backend separately

---

### 3. **Vercel** (Full Stack - Recommended)

Vercel is ideal for full-stack Next.js apps, but this project uses Express.js.

1. Create `vercel.json`:
   ```json
   {
     "buildCommand": "pnpm build",
     "outputDirectory": "dist",
     "functions": {
       "dist/index.js": {
         "runtime": "nodejs18.x"
       }
     }
   }
   ```

2. Push to GitHub and connect to Vercel
3. Vercel will auto-deploy on every push

---

### 4. **Railway / Render** (Full Stack - Recommended)

Both platforms support Node.js backends easily.

**Railway:**
1. Connect your GitHub repo
2. Set build command: `pnpm build`
3. Set start command: `node dist/index.js`
4. Railway auto-deploys on push

**Render:**
1. Create a new Web Service
2. Connect GitHub repo
3. Build command: `pnpm build`
4. Start command: `node dist/index.js`

---

## Environment Variables

Ensure these are set on your hosting provider:

**Required:**
- `DATABASE_URL` — MySQL/TiDB connection string
- `JWT_SECRET` — Session signing secret
- `VITE_APP_ID` — Manus OAuth app ID
- `OAUTH_SERVER_URL` — Manus OAuth backend URL
- `VITE_OAUTH_PORTAL_URL` — Manus login portal URL

**Optional (for email):**
- `SMTP_HOST` — Email server hostname
- `SMTP_PORT` — Email server port (usually 587 or 465)
- `SMTP_USER` — Email account username
- `SMTP_PASS` — Email account password
- `SMTP_FROM` — Sender email address

---

## SPA Routing Explanation

This is a **Single Page Application (SPA)**. All routes are handled by React Router on the client side.

### How it works:
1. User visits `/services` or `/about`
2. Server receives request for a non-existent file
3. `.htaccess` (cPanel) or `netlify.toml` (Netlify) rewrites to `/index.html`
4. React Router takes over and renders the correct page
5. User sees the correct content without a page reload

### Why it matters:
- Without proper routing config, users get 404 errors
- Each deployment platform handles this differently
- The `.htaccess` file solves this for cPanel/Apache servers

---

## Testing Locally

Before deploying, test the production build:

```bash
# Build
pnpm build

# Start server
node dist/index.js

# Visit http://localhost:3000
# Test navigation: /services, /about, /contact, etc.
# All routes should work without 404 errors
```

---

## Troubleshooting

### 404 errors on sub-routes (e.g., `/services`)
- **Cause:** SPA routing not configured
- **Fix:** Ensure `.htaccess` is in the public folder (cPanel) or `netlify.toml` is configured (Netlify)

### Backend API not responding
- **Cause:** Node.js server not running or port mismatch
- **Fix:** Check server logs, ensure Node.js is running, verify port in `.env`

### Static assets not loading
- **Cause:** Incorrect asset paths
- **Fix:** Ensure `dist/public/` is served as the web root

### Email not sending
- **Cause:** SMTP credentials incorrect or firewall blocking
- **Fix:** Verify SMTP settings, check server firewall rules, test with telnet

---

## Performance Tips

1. **Enable Gzip compression** — `.htaccess` already includes this
2. **Use CDN for static assets** — Consider Cloudflare or AWS CloudFront
3. **Optimize images** — Use WebP format where possible
4. **Code splitting** — Consider dynamic imports for large routes
5. **Database indexing** — Add indexes to frequently queried columns

---

## Security Checklist

- [ ] Set `NODE_ENV=production` on server
- [ ] Use HTTPS/SSL certificate
- [ ] Keep dependencies updated: `pnpm update`
- [ ] Review `.env` files — never commit secrets
- [ ] Enable security headers (already in `.htaccess`)
- [ ] Set up rate limiting on API endpoints
- [ ] Regular backups of database

---

## Support

For issues or questions:
- **Frontend:** Check browser console for errors
- **Backend:** Check server logs: `pm2 logs` or `journalctl -u service-name`
- **Database:** Verify connection string and network access
- **Email:** Test SMTP settings with telnet or a mail client

---

**Last Updated:** February 25, 2026
