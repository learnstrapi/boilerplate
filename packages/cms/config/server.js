module.exports = ({ env }) => {
  return {
    host: env("DATABASE_HOST", "localhost"),
    url: env("API_URL"),

    admin: {
      autoOpen: true,
      auth: {
        secret: env("ADMIN_JWT_SECRET")
      }
    },
    cron: {
      enabled: true
    },
    options: {
      autoMigration: true
    }
  };
};
