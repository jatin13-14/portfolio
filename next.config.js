/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // AVIF intentionally omitted: recent Next.js Image Optimization API CVEs
  // affect AVIF handling. This project doesn't currently use next/image,
  // but this keeps the config safe if it's added later.
  images: {
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
