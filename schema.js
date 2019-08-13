const typeDefs = `
    type Query {
      address: Address
      tokens: [String]!
      channels(token_address: String): ChannelOrErrors
      pending_transfers(token_address: String, partner_address: String): TransferOrErrors
      connections: [Connection]!
      payments(token_address: String, target_address: String): [Payment]!
    }

    type Mutation {
      token(address: String): Token
      channel(token_address: String, partner_address: String, settle_timeout: Int, total_deposit: Int): ChannelOrErrors
      channel_deposit(token_address: String, partner_address: String, total_deposit: Int): ChannelOrErrors
      channel_close(token_address: String, partner_address: String): ChannelOrErrors
      channel_withdraw(token_address: String, partner_address: String, total_withdraw: Int): ChannelOrErrors
      payment(token_address: String, target_address: String, amount: Int): ChannelOrErrors
      connection(token_address: String, funds: Int): ChannelOrErrors
      leave_connection(token_address: String): [String]!
    }

    type Token {
      token_network_address: String
      errors: [String]
    }

    type Address {
      our_address: String!
    }

    type ChannelOrErrors {
      errors: [String]
      channels: [Channel]
    }

    type TransferOrErrors {
      errors: [String]
      transfers: [Transfer]
    }

    type Transfer {
      token_network_identifier: String!
      token_address: String!
      channel_identifier: String!
      initiator: String!
      locked_amount: String!
      payment_identifier: String!
      role: String!
      target: String!
      transferred_amount: String! 
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
      target: String!
      reason: String!
      log_time: String!
      event: String!
    }

    type Connection {
      token_address: String
      funds: Int
      sum_deposits: Int
      channels: Int
    }

`

module.exports = typeDefs
