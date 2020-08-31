const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            const { cpf, symptoms, noSymptoms} = req.body
            if(noSymptoms === 'true') {
                await knex('passport').insert({
                    user_id: cpf, 
                    symptoms: null,
                    noSymptom: true
                })

            } else {
                const symptoms2 = symptoms.split(',')
                for(symptom of symptoms2){
                    console.log(symptom)
                    await knex('passport').insert({
                        user_id: cpf, 
                        symptoms: symptom,
                        noSymptom: false
                    })
                }
            }
            return res.render('page-confirm.html', { cpf, noSymptoms })
            
        } catch (error) {
            next(error)
        } 
    }
}