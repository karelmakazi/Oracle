const path = require('path')
const express = require('express')


const spreads = require('./routes/spreads')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/spreads', spreads)

module.exports = server
