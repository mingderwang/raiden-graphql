Address = require('./address')
Tokens = require('./tokens')
Token = require('./token')

const resolvers = {
  Query: {
    address: (root, {}) => {
      return new Address().create()
    },
    tokens: (root, {}) => {
      return new Tokens().create()
    },
  },
  Mutation: {
    token: (root, { address }) => {
      return new Token(address).create()
    }
  },
}

module.exports = resolvers
