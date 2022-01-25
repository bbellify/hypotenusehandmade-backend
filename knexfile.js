require('dotenv').config()
const mdb = require('knex-mariadb')

const sharedConfig = {
  client: mdb,
  migrations: { directory: './api/data/migrations' },
  seeds: { directory: './api/data/seeds' },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      host: process.env.HOST,
      port: process.env.HOST_PORT,
      user: process.env.MARIADB_USER,
      password: process.env.MARIADB_PASSWORD,
      database: process.env.MARIADB_DB_DEV
    }
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URL,
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
}
