const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { symptoms } = require('./public/data')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.get('/', function(request, response){
    return response.render('index.html', { symptoms })
})
.get('/passport', function(request, response){
    return response.render('page-confirm.html')
})
.post('/passport', function(request, response){
    const data = request.body
    console.log(data)
    return response.render('page-confirm.html', { data })
})
.listen(5000, function() {
    return console.log('Server is running')
})