/**
 * Canonical site origin. Set NEXT_PUBLIC_SITE_URL once the final production domain is known.
 * On Vercel the production URL is used automatically as a fallback; otherwise this is localhost.
 */
/**
 * Sub-folder the site is served from. Empty on a custom domain or a root site (username.github.io).
 * GitHub project pages are served from /<repository-name>, so the deploy workflow sets NEXT_PUBLIC_BASE_PATH to that.
 */
export const basePath: string = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export const isSiteUrlConfigured = (): boolean =>
  Boolean(process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL);

/** Public address of the site, including the sub-folder (no trailing slash). */
export const siteUrl = (): string =>
  (process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")) + basePath;
