# Admin Site Deployment Configuration

## Netlify Deployment Settings

To deploy the admin site to Netlify, configure these settings in the Netlify dashboard:

### Build Settings
- **Base directory**: `apps/admin`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### Environment Variables
- `VITE_API_URL`: Set to your production backend URL (e.g., `https://your-backend.onrender.com/api` or `https://your-backend.up.railway.app/api`)

### Example:
```
Base directory: apps/admin
Build command: npm run build
Publish directory: dist
Environment variables:
  VITE_API_URL=https://your-production-backend/api
```

## Why Separate Deployments?

- Customer site (Next.js) and Admin site (React/Vite) are deployed separately for security and independence
- Admin site requires authentication and role-based access control
- Each site can be scaled and managed independently
- Security: Admin access is controlled by backend authentication, not by URL obscurity