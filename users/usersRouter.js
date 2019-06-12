const router = require('express').Router()
const Users = require('./users-model.js')
const restricted = require('../auth/restricted.js')
const checkRole = require('../auth/checkRole.js');

router.get('/', restricted, checkRole('teacher'), (req, res) => {
    Users.find()
    .then( users => {
        res.status(200).json({users})
    })
    .catch(err => res.status(500).json({message: err}))
})



module.exports = router