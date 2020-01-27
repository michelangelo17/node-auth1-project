exports.seed = knex =>
  knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          user: 'sbehling0',
          password: 'apCQThKdMrn',
        },
        {
          user: 'crowet1',
          password: 'KzKd5usLnBwF',
        },
        {
          user: 'fphillipp2',
          password: '2Ylup63T',
        },
        {
          user: 'btryhorn3',
          password: 'qgKDutaoL0',
        },
        {
          user: 'afranseco4',
          password: 'XfMhZq',
        },
        {
          user: 'eyockney5',
          password: 'zsoCt2EXE',
        },
        {
          user: 'dslimmon6',
          password: '1AZviEu9Xg8j',
        },
        {
          user: 'fhundall7',
          password: 'GBWFCKLG',
        },
        {
          user: 'smacallan8',
          password: 'VQKOtP',
        },
        {
          user: 'cfilisov9',
          password: 'M7aBMUtdF4CO',
        },
      ])
    )
