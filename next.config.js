/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
                protocol: "https",
            },
            {
                hostname: "blog-directus.zeabur.app",
                protocol: "https",
            },
            {
                // https://placehold.co
                hostname: "placehold.co",
                protocol: "https"
            }
        ],
        domains: ["blog-directus.zeabur.app", "images.unsplash.com"],
    },
}

module.exports = nextConfig
