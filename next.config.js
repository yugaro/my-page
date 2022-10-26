/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // swcMinify: true,
  env: {
    ...require(`./env/${process.env.APP_ENV || 'local'}.json`),
  },
  sassOptions: {
    prependData: `@import "@/styles/color.scss";`
  },
}
