/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep `next dev` and `next build` from writing into the same cache.
  // Sharing `.next` can leave a running dev server with new markup but stale CSS.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  reactCompiler: true,
};

export default nextConfig;
