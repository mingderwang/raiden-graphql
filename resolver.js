Address = require('./address')
Tokens = require('./tokens')

const resolvers = {
  Query: {
    address: (root, {}) => {
      return new Address().create()
    },
    tokens: (root, {}) => {
      return new Tokens().create()
    }
  }
}

module.exports = resolvers
