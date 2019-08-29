const { GraphQLServer } = require('graphql-yoga')
const db = require('./db')

const resolvers = {
  Query: {
   users: (obj, args) => {
     if(args.id) {
       return db.getCollection('users').filter(user => user.id === args.id)
     }
    return db.getCollection('users')
   }
  },

  User: {
    companies: (obj) => {
      return db.getCollection('companies').filter(company => company.bossId === obj.id)
    }
  }
}

const server = new GraphQLServer({
 typeDefs: './schema.graphql',
 resolvers,
})

server.start(() => console.log('server started'))