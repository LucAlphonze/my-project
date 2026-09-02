import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
allowedDevOrigins:['192.168.100.9'],
  images:{
    remotePatterns:[
      {
        hostname:'images.unsplash.com',
        protocol:'https',
        port:'',
      }
    ]
   }
  
}

export default nextConfig;
