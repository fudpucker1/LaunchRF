exports.up = function(knex) {
  // Create the frequency_requirements table
  return knex.schema.createTable('frequency_requirements', table => {
    table.increments('id').primary();
    table.integer('launch_id').unsigned();
    table.foreign('launch_id').references('launches.id');
    table.float('frequency_start');
    table.float('frequency_end');
    table.float('power_level');
    table.float('bandwidth');
    table.string('equipment_specs')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('frequency_requirements');
};