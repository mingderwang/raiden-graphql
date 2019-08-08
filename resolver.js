Address = require('./address')

const resolvers = {
  Query: {
    address: (root, { address }) => {
      return new Address(address).create()
    }
  }
}

module.exports = resolvers
