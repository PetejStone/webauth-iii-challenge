
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {

    //primary key column
    users.increments()

    //username column
    users
    .string('username', 128)
    .notNullable()
    .unique()

    users
    .string('department', 128)
    .notNullable()
    

    //password column
    users
    .string('password', 128)
    .notNullable()
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.destroyTableIfExists('users');
};
