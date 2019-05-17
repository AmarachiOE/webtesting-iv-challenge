
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('characters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        { name: 'patricia' },
        { name: 'maame'},
        { name: 'vivian'},
        { name: 'meha'},
        { name: 'sele'},
      ]);
    });
};
