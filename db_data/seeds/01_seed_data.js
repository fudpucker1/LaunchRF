const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  await knex('frequency_allocations').del();
  await knex('frequency_requirements').del();
  await knex('launches').del();
  await knex('customers').del();
  await knex.raw('TRUNCATE TABLE customers RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE launches RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE frequency_requirements RESTART IDENTITY CASCADE');
  await knex.raw('TRUNCATE TABLE frequency_allocations RESTART IDENTITY CASCADE');

  await knex('customers').insert([
    { customer_name: 'SpaceX', contact_info: 'Allen' },
    { customer_name: '45 SLD', contact_info: 'Johnson' },
    { customer_name: '30 SLD', contact_info: 'Smith' }
  ]);

  await knex('launches').insert([
    { customer_id: 1, date: '10/20/2024', time: '14:00', duration: 20 },
    { customer_id: 1, date: '10/21/2024', time: '14:00', duration: 20 },
    { customer_id: 2, date: '10/22/2024', time: '14:00', duration: 20 },
    { customer_id: 2, date: '10/23/2024', time: '14:00', duration: 20 },
    { customer_id: 3, date: '10/24/2024', time: '14:00', duration: 20 },
    { customer_id: 3, date: '10/25/2024', time: '14:00', duration: 20 }
  ]);

  await knex('frequency_requirements').insert([
    { launch_id: 1, frequency_start: 1.125, frequency_end: 2.251, power_level: 20, bandwidth: 50, equipment_specs: 'Made up specs' },
    { launch_id: 2, frequency_start: 3.125, frequency_end: 4.251, power_level: 20, bandwidth: 50, equipment_specs: 'Made up specs' },
    { launch_id: 3, frequency_start: 5.125, frequency_end: 6.251, power_level: 20, bandwidth: 50, equipment_specs: 'Made up specs' },
    { launch_id: 4, frequency_start: 7.125, frequency_end: 8.251, power_level: 20, bandwidth: 50, equipment_specs: 'Made up specs' },
    { launch_id: 5, frequency_start: 9.125, frequency_end: 10.251, power_level: 20, bandwidth: 50, equipment_specs: 'Made up specs' },
    { launch_id: 6, frequency_start: 11.125, frequency_end: 12.251, power_level: 20, bandwidth: 50, equipment_specs: 'Made up specs' }
  ]);

  await knex('frequency_allocations').insert([
    { requirement_id: 1, allocated_frequency: 1.125, allocation_status: 0 },
    { requirement_id: 2, allocated_frequency: 3.125, allocation_status: 0 },
    { requirement_id: 3, allocated_frequency: 5.125, allocation_status: 0 },
    { requirement_id: 4, allocated_frequency: 7.125, allocation_status: 0 },
    { requirement_id: 5, allocated_frequency: 9.125, allocation_status: 0 },
    { requirement_id: 6, allocated_frequency: 11.125, allocation_status: 0 }
  ]);
};