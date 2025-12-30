/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  // middleware: ["~/src/middleware.ts"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // hostname: "unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images-assets.nasa.gov",
        pathname: "/**",
      },
    ],
  },

  // Skipping type check until zod integration
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // experimental: {
  //   ppr: "incremental",
  //   after: true,
  // },

  // devIndicators: {
  //   appIsrStatus: true,
  //   buildActivity: true,
  //   buildActivityPosition: "bottom-right",
  // },
};

export default config;
