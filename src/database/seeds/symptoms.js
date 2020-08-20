
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('symptoms').del()
    .then(function () {
      // Inserts seed entries
      return knex('symptoms').insert([
        { name: "Febre"},
        { name: "Coriza"},
        { name: "Tosse seca"},
        { name: "Dor de cabeça"},
        { name: "Dificuldade de respirar ou falta de ar"},
      ]);
    });
};
