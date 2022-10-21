module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  url: env('SITE_URL', 'http://localhost'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
