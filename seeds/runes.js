
exports.seed = function(knex) {
  return knex('runes').del()
    .then(function () {
      return knex('runes').insert([
        {
          rune_id: 1,
          name: 'Fehu',
          image: 'f',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 2,
          name: 'Uruz',
          image: 'u',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 3,
          name: 'Thurisaz',
          image: 'T',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 4,
          name: 'Ansuz',
          image: 'a',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 5,
          name: 'Raido',
          image: 'r',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 6,
          name: 'Kano',
          image: 'k',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 7,
          name: 'Gebo',
          image: 'g',
          meaning: '',
          reversible: false
        },
        {
          rune_id: 8,
          name: 'Wunjo',
          image: 'w',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 9,
          name: 'Hagalaz',
          image: 'h',
          meaning: '',
          reversible: false
        },
        {
          rune_id: 10,
          name: 'Nauthiz',
          image: 'n',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 11,
          name: 'Isa',
          image: 'i',
          meaning: '',
          reversible: false
        },
        {
          rune_id: 12,
          name: 'Jera',
          image: 'j',
          meaning: '',
          reversible: false
        },
        {
          rune_id: 13,
          name: 'Eihwaz',
          image: 'I',
          meaning: '',
          reversible: false
        },
        {
          rune_id: 14,
          name: 'Perth',
          image: 'p',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 15,
          name: 'Algiz',
          image: 'z',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 16,
          name: 'Sowelo',
          image: 's',
          meaning: '',
          reversible: false
        },
        {
          rune_id: 17,
          name: 'Teiwaz',
          image: 't',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 18,
          name: 'Berkana',
          image: 'b',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 19,
          name: 'Ehwaz',
          image: 'e',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 20,
          name: 'Mannaz',
          image: 'm',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 21,
          name: 'Laguz',
          image: 'l',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 22,
          name: 'Inguz',
          image: 'N',
          meaning: '',
          reversible: false
        },
        {
          rune_id: 23,
          name: 'Dagaz',
          image: 'd',
          meaning: '',
          reversible: false
        },
        {
          rune_id: 24,
          name: 'Othila',
          image: 'o',
          meaning: '',
          reversible: true
        },
        {
          rune_id: 25,
          name: 'Blank',
          image: '',
          meaning: '',
          reversible: false
        }
      ]);
    });
};
