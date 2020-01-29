exports.seed = knex =>
  knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          username: 'sbehling0',
          password: 'apCQThKdMrn',
        },
        {
          username: 'crowet1',
          password: 'KzKd5usLnBwF',
        },
        {
          username: 'fphillipp2',
          password: '2Ylup63T',
        },
        {
          username: 'btryhorn3',
          password: 'qgKDutaoL0',
        },
        {
          username: 'afranseco4',
          password: 'XfMhZq',
        },
        {
          username: 'eyockney5',
          password: 'zsoCt2EXE',
        },
        {
          username: 'dslimmon6',
          password: '1AZviEu9Xg8j',
        },
        {
          username: 'fhundall7',
          password: 'GBWFCKLG',
        },
        {
          username: 'smacallan8',
          password: 'VQKOtP',
        },
        {
          username: 'cfilisov9',
          password: 'M7aBMUtdF4CO',
        },
      ])
    )
