Address = require('./address')
Tokens = require('./tokens')
Token = require('./token')
Channels = require('./channels')
ChannelDeposit = require('./channel_deposit')
ChannelClose = require('./channel_close')
ChannelWithdraw = require('./channel_withdraw')

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
    channel_deposit: (root, { token_address, partner_address, total_deposit }) => {
      return new ChannelDeposit(token_address, partner_address, total_deposit).create()
    },
    channel_close: (root, { token_address, partner_address}) => {
      return new ChannelClose(token_address, partner_address).create()
    },
    channel_withdraw: (root, { token_address, partner_address, total_withdraw }) => {
      return new ChannelWithdraw(token_address, partner_address, total_withdraw).create()
    },
  },
}

module.exports = resolvers
