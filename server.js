/*
  To start the apollo graphql server with express on port 4000
*/

const express = require('express');
const { createServer } = require('http');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = require('./schema');
const resolvers = require('./resolver');

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
