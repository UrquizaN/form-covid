const express = require('express')
const routes = express.Router()
const IndexController = require('./controllers/IndexController')
const ValidationController = require('./controllers/ValidationController')
const PassportController = require('./controllers/PassportController')
// const { symptoms } = require('../public/data')

routes
.get('/', IndexController.index)
.get('/cpf/:cpf', ValidationController.cpf)
.get('/identification/:cpf/:identification', ValidationController.identification)
.post('/passport', PassportController.index)
// .post('/passport', function(request, response){
//     const data = request.body
//     console.log(data)
//     return response.render('page-confirm.html', { data })
// })

module.exports = routes