/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    experimental: {
      reactCompiler: true,
      ppr:'incremental',
      after: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:"www.sixt.com",
        port: '',
       
      },
      {
        protocol: 'https',
        hostname:"randomuser.me",
        port: '',
       
      },

      {
        protocol: 'https',
        hostname:"img.myloview.com",
        port: '',
       
      },
    ],
  },
};

export default nextConfig;
