import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.overfuel.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  experimental: {
    reactCompiler: false
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default withPayload(nextConfig)
