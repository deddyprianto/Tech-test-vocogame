/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@ant-design/icons", "@ant-design/icons-svg"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
