const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { symptoms } = require('../public/data')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.static('public'))
.get('/', function(request, response){
    return response.render('index.html', { symptoms })
})
.listen(5000, function() {
    return console.log('Server is running')
})