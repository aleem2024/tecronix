/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⬅️ replaces `next export`
  distDir: 'out',   // static files will go into /out
  images: {
    unoptimized: true, // required for static export
  },
  trailingSlash: true, // optional, but good for static hosting
}

export default nextConfig;
