const knex = require("../database");

module.exports = {
    async index(req, res, next) {
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
    }
}