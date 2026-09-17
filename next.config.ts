import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
 allowedDevOrigins: ['192.168.100.9'],
 images: {
   formats: ['image/avif', 'image/webp'],
   remotePatterns: [
      {
       hostname: 'images.unsplash.com',
       protocol: 'https',
       port: '',
     },
   ],
 },
}

export default nextConfig

