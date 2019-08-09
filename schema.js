const typeDefs = `
    type Query {
      address: Address
      tokens: [String]!
      channels: [Channel]!
    }

    type Token {
      token_network_address: String
      errors: [String]
    }

    type Address {
      our_address: String!
    }

    type Mutation {
      token(address: String): Token
    }

    type Channel {
      token_network_identifier: String!
      total_deposit: Int!
      state: String!
      partner_address: String!
      token_address: String!
      settle_timeout: Int!
      reveal_timeout: Int!
      channel_identifier: Int!
      balance: Int!
    }

    type Payment {
      id: String!
      event: String!
      amount: Int!
      initiator: String!
      log_time: String!
    }

    type Subscription {
        latestBlock: String
    }
`

module.exports = typeDefs
