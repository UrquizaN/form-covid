const knex = require('../database')

module.exports = {
    async getSymptoms(req, res, next) {
        try {
            const symptoms = await knex('symptoms').select('symptoms.*')
            return res.render('index.html', { symptoms })
        } catch (error) {
            next(error)
        }
    }
}