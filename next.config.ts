import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/nextjs-tut',
    distDir: 'docs',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
