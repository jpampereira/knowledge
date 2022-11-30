module.exports = {
  client: 'pg',
  version: 14.1,
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'knowledge',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: { tableName: 'knex_migrations' },
};
