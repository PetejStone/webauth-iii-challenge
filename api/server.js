const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const usersRouter = require('../users/usersRouter')
const authRouter = require('../auth/authRouter')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
    res.send('<h1> Server is Running!</h1>')
})

module.exports = server;