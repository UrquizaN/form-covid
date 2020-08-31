const knex = require("../database");

module.exports = {
    async cpf(req, res, next) {
        try {
            const { cpf } = req.params

            const results = await knex('users').where({ cpf })
            
            if(results.length == 0) {
                return res.send(404)
            }

            return res.send(results)
            
        } catch (error) {
            next(error)
        }
    },

    async identification(req, res, next) {
        try {
            const { cpf, identification } = req.params
            console.log('cpf: ' + cpf + 'id: ' + identification)
            const results = await knex('users').where({ cpf, identification })
            console.log(results)
            if(results.length == 0) {
                return res.send(404)
            }

            return res.send(results) 
            
        } catch (error) {
            next(error)
        }
    }
}