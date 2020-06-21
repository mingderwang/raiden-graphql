Address = require('./address')
Tokens = require('./tokens')
Token = require('./token')
Channel = require('./channel')
Channels = require('./channels')
PendingTransfers = require('./pending_transfers')
ChannelDeposit = require('./channel_deposit')
ChannelClose = require('./channel_close')
ChannelWithdraw = require('./channel_withdraw')
Payment = require('./payment')
Payments = require('./payments')
Connection = require('./connection')
LeaveConnection = require('./leave_connection')
Connections = require('./connections')

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
    pending_transfers: (root, { token_address, partner_address}) => {
      return new PendingTransfers(token_address, partner_address).create()
    },
    connections: (root, {}) => {
      return new Connections().create()
    },
    payments: (root, { token_address, target_address}) => {
      return new Payments(token_address, target_address).create()
    },
  },
  Mutation: {
    token: (root, { address }) => {
      return new Token(address).create()
    },
    channel: (root, { token_address, partner_address, settle_timeout, total_deposit, reveal_timeout}) => {
      return new Channel(token_address, partner_address, settle_timeout, total_deposit, reveal_timeout).create()
    },
    channel_deposit: (root, { token_address, partner_address, total_deposit }) => {
      return new ChannelDeposit(token_address, partner_address, total_deposit).create()
    },
    channel_close: (root, { token_address, partner_address}) => {
      return new ChannelClose(token_address, partner_address).create()
    },
    channel_withdraw: (root, { token_address, partner_address, total_withdraw }) => {
      return new ChannelWithdraw(token_address, partner_address, total_withdraw).create()
    },
    payment: (root, { token_address, target_address, amount }) => {
      return new Payment(token_address, target_address, amount).create()
    },
    connection: (root, { token_address, funds }) => {
      return new Connection(token_address, funds).create()
    },
    leave_connection: (root, { token_address }) => {
      return new LeaveConnection(token_address).create()
    },
  },
}

module.exports = resolvers
