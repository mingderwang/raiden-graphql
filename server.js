const express = require('express');
const { createServer } = require('http');
const { ApolloServer, gql } = require('apollo-server-express');

//const typeDefs = require('./schema');
//#const resolvers = require('./resolver');

const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world'
  }
};

const PORT = 4000;

const app = express();

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

const httpServer = createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);


httpServer.listen({ port: PORT }, () =>{
  console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`)
})
