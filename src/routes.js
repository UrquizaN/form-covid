const express = require('express')
const routes = express.Router()
const SymptomsController = require('./controllers/SymptomsController')
// const { symptoms } = require('../public/data')

routes
.get('/', SymptomsController.getSymptoms)
.get('/passport', function(request, response){
    return response.render('page-confirm.html')
})
// .post('/passport', function(request, response){
//     const data = request.body
//     console.log(data)
//     return response.render('page-confirm.html', { data })
// })

module.exports = routes