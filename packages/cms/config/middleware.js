module.exports = {
  timeout: 100,
  load: {
    before: ["responseTime", "logger", "cors", "responses", "gzip"],
    order: [
      "Define the middlewares' load order by putting their name in this array in the right order"
    ],
    after: ["parser", "router"]
  },
  enabled: true,
  defaultLocale: "en_us",
  modes: ["query", "subdomain", "cookie", "header", "url", "tld"],
  cookieName: "locale",
  settings: {
    session: {
      enabled: true,
      client: "cookie",
      key: "strapi.sid",
      prefix: "strapi:sess:",
      secretKeys: [
        "vfO+cqG7m7pnZCh0HDS47VAva6gl4ta+Xer1VGwjHcjCZMgWV31lv4aJlViHcx0dL8r/S/LSG3uf3lA8+zUj8g==",
        "5RQl2v3ucIRwR2R68SLPk4gyrwOgAboDpaoYqYxS6J/FGIGEMYxz3zDuyfcykCRjPZuSS+WNrUjTTBgoZWO56A=="
      ],
      httpOnly: true,
      maxAge: 86400000,
      overwrite: true,
      signed: false,
      rolling: false
    },
    logger: {
      level: "info",
      exposeInContext: true,
      requests: true
    },
    parser: {
      enabled: true,
      multipart: true
    },
    public: {
      path: "./public",
      maxAge: 60000
    },
    favicon: {
      path: "favicon.ico",
      maxAge: 86400000
    },
    csrf: {
      enabled: false,
      key: "_csrf",
      secret: "_csrfSecret"
    },
    csp: {
      enabled: true,
      policy: ["block-all-mixed-content"]
    },
    p3p: {
      enabled: true,
      value: ""
    },
    hsts: {
      enabled: true,
      maxAge: 31536000,
      includeSubDomains: true
    },
    xframe: {
      enabled: true,
      value: "SAMEORIGIN"
    },
    xss: {
      enabled: true,
      mode: "block"
    },
    cors: {
      enabled: true,
      origin: "*",
      expose: ["WWW-Authenticate", "Server-Authorization"],
      maxAge: 31536000,
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"],
      headers: ["Content-Type", "Authorization", "X-Frame-Options", "Origin"]
    },
    ip: {
      enabled: false,
      whiteList: [],
      blackList: []
    }
  }
};
