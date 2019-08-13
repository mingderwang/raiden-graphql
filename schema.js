const typeDefs = `
    type Query {
      address: Address
      tokens: [String]!
      channels(token_address: String): ChannelWithErrors
    }

    type Mutation {
      token(address: String): Token
      channel_deposit(token_address: String, partner_address: String, total_deposit: Int): ChannelWithErrors
      channel_close(token_address: String, partner_address: String): ChannelWithErrors
      channel_withdraw(token_address: String, partner_address: String, total_withdraw: Int): ChannelWithErrors
    }

    type Token {
      token_network_address: String
      errors: [String]
    }

    type Address {
      our_address: String!
    }

    type ChannelWithErrors {
      errors: [String]
      channels: [Channel]
    }

    type Channel {
      token_network_identifier: String!
      total_deposit: Int
      state: String!
      partner_address: String!
      token_address: String!
      settle_timeout: Int!
      reveal_timeout: Int!
      channel_identifier: Int!
      balance: Int!
    }

    type Deposit {
      amount: Int!  
      block_number: Int!
      event: String!
      identifier: Int!
      target: String!
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
