const credentials = require('./credentials.json');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: credentials.username,
  password: credentials.password,
  database: 'sqlnode',
  define: {
    timestamps: true,
    underscored: true,
  },
};
