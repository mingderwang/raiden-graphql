Address = require('./address')
Tokens = require('./tokens')
Token = require('./token')
Channels = require('./channels')

const resolvers = {
  Query: {
    address: (root, {}) => {
      return new Address().create()
    },
    tokens: (root, {}) => {
      return new Tokens().create()
    },
    channels: (root, {token_address}) => {
      return new Channels(token_address).create()
    },
  },
  Mutation: {
    token: (root, { address }) => {
      return new Token(address).create()
    },
  },
}

module.exports = resolvers
