/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com",
      },

      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },

      {
        protocol: "https",
        hostname: "www.linkedin.com",
      },
    ],
  },
};

export default nextConfig;
