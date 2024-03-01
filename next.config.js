/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/block-explorer",
        permanent: true,
      },
      {
        source: "/block-explorer",
        destination: "/block-explorer/btc",
        permanent: true,
      },
    ];
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false,
    },
  },
};

module.exports = nextConfig;
