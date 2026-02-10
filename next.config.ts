import type { NextConfig } from "next";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  // 🔴 IMPORTANT: Disable Turbopack for MDX compatibility
  experimental: {
    turbo: false,
  },
};

export default withMDX(nextConfig);
