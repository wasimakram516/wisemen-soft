/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'wisemensoft.com',
          },
        ],
        destination: 'https://www.wisemensoft.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
