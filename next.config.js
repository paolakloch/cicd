/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This is the important line for static export
    trailingSlash: true, // Recommended for static exports
    // If you are using next/image, you might need this for static exports
    // images: {
    //   unoptimized: true,
    // },
    // Add any other Next.js configurations here if needed
};

module.exports = nextConfig;