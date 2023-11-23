/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "http://api.univ-parking.xyz/v1/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
