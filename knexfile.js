require('dotenv-flow').config();

const local = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
  },
  useNullAsDefault: true,
  debug: true,
  migrations: {
    directory: 'db/migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: 'db/seeds'
  }
};

const docker = {
  ...local,
  debug: false
};

module.exports = {
  client: local.client,
  local,
  test: local,
  docker
};
