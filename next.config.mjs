/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: { //PPRを有効にする
        ppr: 'incremental',
      },
};

export default nextConfig;
