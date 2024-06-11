/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    experimental: {
      reactCompiler: true,
      ppr:'incremental',
      after: true,
    },
  },
};

export default nextConfig;
