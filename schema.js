const typeDefs = `
    type Query {
      address: Address
      tokens: [String]!
    }

    type Address {
      our_address: String!
    }

    type Channel {
      total_deposit: Int!
      state: String!
      partner_address: String!
      token_network_identifier: String!
      settle_timeout: Int!
      reveal_timeout: Int!
      channel_identifier: Int
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
