import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve responsive WebP at tighter quality thresholds for smaller payloads
    qualities: [60, 80, 85, 100],
    // Limit srcset sizes to what we actually use — avoids generating unnecessary variants
    deviceSizes: [640, 768, 1080, 1280, 1920],
    imageSizes: [128, 256, 384],
  },

  // Inlines above-fold critical CSS into <style> tags; defers the rest asynchronously.
  // Requires the `critters` devDependency. Reduces render-blocking CSS significantly.
  experimental: {
    optimizeCss: true,
  },

  // Compress all text assets with gzip (default is true but explicit for clarity)
  compress: true,

  // Minimise JavaScript — enabled by default in production, listed for clarity
  // poweredByHeader: false removes the X-Powered-By header (minor security + payload win)
  poweredByHeader: false,
};

export default nextConfig;
