exports.up = function(knex) {
  // Create the frequency_allocations table
  return knex.schema.createTable('frequency_allocations', table => {
    table.increments('id').primary();
    table.integer('requirement_id').unsigned();
    table.foreign('requirement_id').references('frequency_requirements.id');
    table.float('allocated_frequency');
    table.boolean('allocation_status')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('frequency_allocations');
};