/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "images.clerk.dev" },
      { protocol: "https", hostname: "uploadthing.com" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "utfs.io" },
      { protocol: "https", hostname: "tender-terrier-15.clerk.accounts.dev" },
    ],
  },
};

export default nextConfig;
