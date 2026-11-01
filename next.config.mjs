/** @type {import('next').NextConfig} */
// GitHub project pages are served from /<repository-name>. The deploy workflow sets NEXT_PUBLIC_BASE_PATH for that;
// locally and on a custom domain it is empty and nothing changes.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  // Static hosting has no image optimiser: a tiny custom loader serves /public images as-is (and adds the base path).
  images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts" },
  devIndicators: false,
  // Import only the icons/animation helpers that are used, so each page compiles less code
  experimental: { optimizePackageImports: ["lucide-react", "framer-motion"] },
};
export default nextConfig;
