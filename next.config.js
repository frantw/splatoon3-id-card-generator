/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compress: true,
    i18n: {
        locales: ['zh-Hant-TW'],
        defaultLocale: 'zh-Hant-TW',
    },
};

module.exports = nextConfig;
