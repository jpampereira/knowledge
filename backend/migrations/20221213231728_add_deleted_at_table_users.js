exports.up = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.timestamp('deletedAt');
  });
};

exports.down = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.dropColumn('deletedAt');
  });
};
