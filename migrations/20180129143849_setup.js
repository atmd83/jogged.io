
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('records', function (table) {
    table.increments();
    table.string('user_id');
    table.string('app_name');
    table.string('message');
    table.string('level');
    table.timestamps();
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('records')
};
