const router = require('express').Router()
const Users = require('./users-model.js')
//const restricted = require('../auth/restsricted.js')

router.get('/', (req, res) => {
    Users.find()
    .then( users => {
        res.status(200).json({users})
    })
    .catch(err => res.status(500).json({message: err}))
})

module.exports = router