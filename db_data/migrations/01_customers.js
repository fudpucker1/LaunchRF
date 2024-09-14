exports.up = function(knex) {
  // Create the customers table
  return knex.schema.createTable('customers', table => {
    table.increments('id').primary();
    table.string('customer_name');
    table.string('contact_info')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('customers');
};