const router = require('express').Router()
const Users = require('./users-model.js')
const restricted = require('../auth/restricted.js')

router.get('/', restricted, (req, res) => {
    Users.find()
    .then( users => {
        res.status(200).json({users})
    })
    .catch(err => res.status(500).json({message: err}))
})

module.exports = router