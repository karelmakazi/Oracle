
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('spreads').del()
    .then(function () {
      // Inserts seed entries
      return knex('spreads').insert([
        { pos1_rune: 'Fehu', 
          pos1_aspect:'normal',
          pos1_image:'f', 
          pos2_rune: 'Berkano', 
          pos2_aspect:'normal',
          pos2_image:'b', 
          pos3_rune: 'Algiz', 
          pos3_aspect:'normal',
          pos3_image:'z', 
          journal:'journaled'
        },
        { pos1_rune: 'Fehu', 
        pos1_aspect:'normal',
        pos1_image:'f', 
        pos2_rune: 'Berkano', 
        pos2_aspect:'reversed',
        pos2_image:'b', 
        pos3_rune: 'Algiz', 
        pos3_aspect:'normal',
        pos3_image:'z', 
        journal:'empty'
        },
      ]);
    });
};
