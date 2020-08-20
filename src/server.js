const express = require('express')
const server = express()
const routes = require('./routes')
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.json())
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.use(routes)

// not found 404
.use( (req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

// Cathc all
.use( (error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})

.listen(5000, function() {
    return console.log('Server is running')
})