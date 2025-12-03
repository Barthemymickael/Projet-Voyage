/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Si tu utilises <Image>, ajuste ici
    // remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  experimental: {
    // Optionnel : petites optis pour nos libs
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;