
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          cpf: "12345678910", 
          name: "João Bastos", 
          user_type: "0", 
          identification: "12345",
        },
        { 
          cpf: "12345678920", 
          name: "Maria Silva",
          user_type: "1", 
          identification: "123456",
        },
        { 
          cpf: "12345678930", 
          name: "Danilo Ferreira",
          user_type: "1", 
          identification: "123457",
        },
        { 
          cpf: "12345678940", 
          name: "Bruna Araujo",
          user_type: "0", 
          identification: "12354",
        },
      ]);
    });
};
