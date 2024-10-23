/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracing: true,
  },
  images: {
    domains: ['localhost'], // Allow localhost images
},
};

export default nextConfig;
