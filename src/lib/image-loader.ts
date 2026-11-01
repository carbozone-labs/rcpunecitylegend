/**
 * Image loader for the static export. The site has no image server, so images are served as-is from /public.
 * The only job here is to add the sub-folder (NEXT_PUBLIC_BASE_PATH) when the site lives at username.github.io/<repo>/.
 */
export default function imageLoader({ src }: { src: string }): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  return src.startsWith("/") ? `${base}${src}` : src;
}
