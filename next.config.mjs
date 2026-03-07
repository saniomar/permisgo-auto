/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  exportTrailingSlash: true,
  /* config options here */
  reactCompiler: true,
  devIndicators: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
