const knex = require('knex'); // import knex

const knexConfig = require('../knexfile.js'); //imports knex file

module.exports = knex(knexConfig.development); // exports the development portion of that file
