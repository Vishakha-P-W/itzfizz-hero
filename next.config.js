/** @type {import('next').NextConfig} */
// Static export so the site can be hosted on GitHub Pages / Vercel.
// For GitHub Pages set the repo name, e.g. NEXT_PUBLIC_BASE_PATH=/car-scroll-animation
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

module.exports = {
  output: "export",
  basePath,
  images: { unoptimized: true },
};
