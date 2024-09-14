exports.up = function(knex) {
  // Create the launches table
  return knex.schema.createTable('launches', table => {
    table.increments('id').primary();
    table.integer('customer_id').unsigned();
    table.foreign('customer_id').references('customers.id');
    table.date('launch_date');
    table.time('launch_time');
    table.integer('duration')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('launches');
};