const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// import routers here
const authRouter = require('./auth/auth-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

// use routers go here
server.use('/auth', authRouter)

server.get('/', (req, res) => {
  res.json({ api: 'up' })
})

module.exports = server
