const db = require('../data/dbConfig.js') //imports dbConfig file rather than having to import all the knex imports

module.exports = {
    find,
    findBy,
    findById,
    findUsers, // temporary fn for client side as filtering by department throws a 500 error, so returning all in a separete fn
    add
}

function findUsers() { //returns users table and selects id, username, and password columns to return
    return db('users').select('id', 'username', 'password')
}

function find(department) { //returns users table and selects id, username, and password columns to return
    return db('users').where({department: department}).select('id', 'username', 'password')
}

function findBy(filter) { //returns users where the username = username
    return db('users').where(filter)
}

function findById(id) {
    return db('users').where({id: id})
    .first() //returns first option (only returns one option anyways) -- this pulls it out of array
}

async function add(user) {
    const [id] = await db('users').insert(user); //inserts user and sets it == to id
  
    return findById(id); //returns the user that was created 
  }