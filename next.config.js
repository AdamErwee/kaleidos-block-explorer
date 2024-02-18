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
      // Enable display of the component name along with the generated className (needed for debugging).
      displayName: true,
      // Enable SSR support
      ssr: true,
      // Optional
      fileName: false,
    },
  },
};

module.exports = nextConfig;
