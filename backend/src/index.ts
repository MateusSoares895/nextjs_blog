import { GraphQLServer } from 'graphql-yoga'
import { resolve } from 'path'
import resolvers from './resolvers/PostResolver'

const app = new GraphQLServer({
  typeDefs: resolve(__dirname, '..', 'src', 'GraphQL', 'schema.graphql'),
  resolvers,
})

app.start()
