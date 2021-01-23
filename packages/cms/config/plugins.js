module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("PROVIDER_API_KEY"),
      api_key: env("PROVIDER_API_SECRET"),
      api_secret: env("PROVIDER_CLOUD_NAME")
    }
  },
  graphql: {
    depthLimit: 5,
    shadowCRUD: true,
    playgroundAlways: false
  }
});
