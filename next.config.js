/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: { and: [/\.(js|ts)x?$/] }, // for js, ts, jsx and tsx files
          use: ['@svgr/webpack'],
        });
    
        return config;
      },
}

module.exports = nextConfig
