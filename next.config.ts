import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/nextjs-tut2',
    distDir: 'docs',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
