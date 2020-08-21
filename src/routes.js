const express = require('express')
const routes = express.Router()
const IndexController = require('./controllers/IndexController')
const CpfController = require('./controllers/CpfController')
// const { symptoms } = require('../public/data')

routes
.get('/', IndexController.index)
.get('/:cpf', CpfController.index)
// .post('/passport', function(request, response){
//     const data = request.body
//     console.log(data)
//     return response.render('page-confirm.html', { data })
// })

module.exports = routes