const router = require('express').Router()
const Users = require('../users/users-model.js')
const bcrypt = require('bcryptjs'); // 
//const restricted = require('../auth/restsricted.js')

router.post('/register', (req,res) => {
    let user = req.body // user = to content user sends
    const hash = bcrypt.hashSync(user.password, 10) // hashes password sent 2 ^ 10th power times
    user.password = hash // password set = to this new hashed value

    Users.add(user) 
    .then(newUser => {
        res.status(201).json({newUser})// adds new user to db
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})




router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({username})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({
                message: `Welcome ${user.username}, you have successfully logged in`
            })
        } else {
            res.status(401).json({message: 'Invalid username or password'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})




module.exports = router