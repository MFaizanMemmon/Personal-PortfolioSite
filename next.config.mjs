/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep `next dev` and `next build` from writing into the same cache.
  // Sharing `.next` can leave a running dev server with new markup but stale CSS.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  reactCompiler: true,
  images: {
    // Dense UI screenshots need a higher quality than the Next.js 75 default.
    qualities: [75, 90],
  },
};

export default nextConfig;
