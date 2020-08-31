
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('passport').del()
    .then(function () {
      // Inserts seed entries
      return knex('passport').insert([
        {user_id: '12345678910', symptoms: '1', noSymptom: false},
        {user_id: '12345678910', symptoms: '2', noSymptom: false},
        {user_id: '12345678910', symptoms: '3', noSymptom: false},
        {user_id: '12345678920', symptoms: null, noSymptom: true},
      ]);
    });
};
