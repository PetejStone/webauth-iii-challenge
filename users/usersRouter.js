const router = require('express').Router()
const Users = require('./users-model.js')
const restricted = require('../auth/restricted.js')
const checkRole = require('../auth/checkRole.js');

router.get('/', restricted, checkRole('teacher'), (req, res) => {
    Users.find(req.body.department)
    .then( users => {
        res.status(200).json({users})
    })
    .catch(err => res.status(500).json({message: err}))
})

router.get('/:id', async (req, res) => {
    
    Users.findById(req.params.id)
     .then(action => {
         res.status(200).json({action})
     })
     .catch(err => {
         res.status(500).json({message: err})
     })
 })

module.exports = router