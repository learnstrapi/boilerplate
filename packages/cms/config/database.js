const parse = require("pg-connection-string").parse;
const config = process.env.DATABASE_URL && parse(process.env.DATABASE_URL);
const isProduction = process.env.NODE_ENV === "production";

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config ? config.host : env("DATABASE_HOST"),
        port: config ? config.port : env.int("DATABASE_PORT"),
        database: config ? config.database : env("DATABASE_NAME"),
        username: config ? config.user : env("DATABASE_USERNAME"),
        password: config ? config.password : env("DATABASE_PASSWORD"),
      },
      options: {
        autoMigration: true,
        ssl: env('DATABASE_SSL') || false,
        authenticationDatabase: env('DATABASE_NAME'),
        pool: {
          min: 0,
          max: 10,
          idleTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          acquireTimeoutMillis: 30000,
        },
      },
    },
  },
});
