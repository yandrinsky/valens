/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['En', 'Fr', 'Ru', 'Rw'],
    defaultLocale: 'Ru',
  },
}

module.exports = nextConfig
