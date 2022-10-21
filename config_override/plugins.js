module.exports = () => ({
  'users-permissions': {
    enabled: true,
    config: {
      jwtSecret: env('ADMIN_JWT_SECRET'),
    },
  },
});
