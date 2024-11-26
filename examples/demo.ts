/* eslint-disable no-console */
const animalHash = require('../dist')

Array.from(Array(100), () => {
  console.log(animalHash(Math.random()))
})
