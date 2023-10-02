/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com'],
    },
    env: {
        NEXT_PUBLIC_LAMBDA_URL: process.env.NEXT_PUBLIC_LAMBDA_URL,
    },
}

module.exports = nextConfig
