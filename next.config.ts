import type { NextConfig } from "next";

const isGitHubPages =
  process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,

  basePath: isGitHubPages
    ? "/portfolio"
    : "",

  images: {
    unoptimized: isGitHubPages,
  },
};

export default nextConfig;