const users = [{
  name: 'fabenow',
  age: 10,
  id: 'ab'
}, {
  name: 'gemerson',
  age: 20,
  id: 'cd'
}]

const companies = [{
  name: 'Red Ventures',
  bossId: 'ab'
},{
  name: 'Azulis',
  bossId: 'cd'
} ]

const db = {
  users,
  companies
}

module.exports = {
  getCollection: (coll) => db[coll]
}