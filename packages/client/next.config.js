const path = require('path')

module.exports = {
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    CMS_URL: process.env.API_URL,
    CMS_URL_PRODUCTION: process.env.API_URL,
    CLIENT_URL: process.env.CLIENT_URL,
    CLIENT_URL_PRODUCTION: process.env.CLIENT_URL_PRODUCTION,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    PROVIDER_API_KEY: process.env.PROVIDER_API_KEY,
    PROVIDER_API_SECRET: process.env.PROVIDER_API_SECRET,
    PROVIDER_CLOUD_NAME: process.env.PROVIDER_CLOUD_NAME,
    WITH_CMS: process.env.WITH_CMS
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  target: 'serverless',
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'media/[name].[hash].[ext]'
        }
      },
      {
        test: /\.(svg)$/,
        loader: 'raw-loader'
      }
    )

    config.module.noParse = /iconv-loader\.js/

    config.resolve.alias['assets'] = path.join(__dirname, 'assets')
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['lib'] = path.join(__dirname, 'lib')
    config.resolve.alias['pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['types'] = path.join(__dirname, 'types')

    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  }
}
