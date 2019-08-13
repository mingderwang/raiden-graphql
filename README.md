# build and run
```
yarn
yarn dev
```

# GraphQL command examples
## address
query:
```
{
  address {
    our_address
  }
}
```
return:
```
{
  "data": {
    "address": {
      "our_address": "0xd2C73673E8C0a13400c7136495dA6fab31618902"
    }
  }
}
```
## tokens
```
{
  tokens
}
```
return:
```
{
  "data": {
    "tokens": [
      "0xD5B3df30512d846A7CB6B4154C066031D837ac60",
      "0x0f114A1E9Db192502E7856309cc899952b3db1ED",
      "0x5422Ef695ED0B1213e2B953CFA877029637D9D26",
      "0x26d5a400C4AeB84FAE923470350EeC3EA6423c78",
      "0x2A07C1D3bc08c183fE4ec5b51f5BfBd5Fe598BDc",
      "0x9aBa529db3FF2D8409A1da4C9eB148879b046700",
      "0xc778417E063141139Fce010982780140Aa0cD5Ab",
      "0x4F209f92F5cDE44FFF98C0b0CA486B14424e2834",
      "0x101848D5C5bBca18E6b4431eEdF6B95E9ADF82FA",
      "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee"
    ]
  }
}
```
## Registering a token
```
mutation {
  token(address: "0xbFF1B20483EC5D24509D8F49F888d3D21921FCF5") {
    errors
    token_network_address
  }
}
```
return:
```
{
  "data": {
    "token": {
      "errors": null,
      "token_network_address": "0x934C75Aa24c4988D4Fd72c39e766110422b6779E"
    }
  }
}
```
or if token already regiestered.
```
{
  "data": {
    "token": {
      "errors": [
        "Token already registered"
      ],
      "token_network_address": null
    }
  }
}
```
or if address is not EIP55 compliance.
```
{
  "data": {
    "token": {
      "errors": [
        "invalid endpoint",
        "Not a valid EIP55 encoded address."
      ],
      "token_network_address": null
    }
  }
}
```
check all tokens again, see "0xbFF1B20483EC5D24509D8F49F888d3D21921FCF5" is registered.
```
{
  tokens
}
```
return:
```
{
  "data": {
    "tokens": [
      "0xD5B3df30512d846A7CB6B4154C066031D837ac60",
      "0x0f114A1E9Db192502E7856309cc899952b3db1ED",
      "0x5422Ef695ED0B1213e2B953CFA877029637D9D26",
      "0x26d5a400C4AeB84FAE923470350EeC3EA6423c78",
      "0x2A07C1D3bc08c183fE4ec5b51f5BfBd5Fe598BDc",
      "0x9aBa529db3FF2D8409A1da4C9eB148879b046700",
      "0xc778417E063141139Fce010982780140Aa0cD5Ab",
      "0x4F209f92F5cDE44FFF98C0b0CA486B14424e2834",
      "0x101848D5C5bBca18E6b4431eEdF6B95E9ADF82FA",
      "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee",
      "0xbFF1B20483EC5D24509D8F49F888d3D21921FCF5"
    ]
  }
}
```
## channels

## GET get channel status
```
{
  channels(token_address: "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee") {
    channels {
      total_deposit
      state
      partner_address
      token_address
      token_network_identifier
    }
    errors
  }
}
```
return:
```
{
  "data": {
    "channels": {
      "channels": [
        {
          "total_deposit": 1000,
          "state": "opened",
          "partner_address": "0x9013a333d3de90a7eF7531746cb8F537632bf96c",
          "token_address": "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee",
          "token_network_identifier": "0xF2d4b7002c1694D5ca597aD6eD21D8C8959a6355"
        }
      ],
      "errors": null
    }
  }
}
```
or with no token_address
```
{
  channels {
    channels {
      state
      balance
      settle_timeout
      token_network_identifier
      total_deposit
      token_address
      channel_identifier
      partner_address
      reveal_timeout
    }
    errors
  }
}
```
return:
```
{
  "data": {
    "channels": {
      "channels": [
        {
          "state": "opened",
          "balance": 1000,
          "settle_timeout": 500,
          "token_network_identifier": "0xF2d4b7002c1694D5ca597aD6eD21D8C8959a6355",
          "total_deposit": 1000,
          "token_address": "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee",
          "channel_identifier": 5,
          "partner_address": "0x9013a333d3de90a7eF7531746cb8F537632bf96c",
          "reveal_timeout": 50
        }
      ],
      "errors": null
    }
  }
}
```
or with error
```
{
  channels (token_address: "asdf") {
    errors
  }
}
```
return:
```
{
  "data": {
    "channels": {
      "errors": [
        "invalid endpoint",
        "Not a valid hex address, 0x prefix missing."
      ]
    }
  }
}
```
## PATCH deposit a channel
```
mutation {
  channel_deposit(
    token_address: "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee"
    partner_address: "0x9013a333d3de90a7eF7531746cb8F537632bf96c"
    total_deposit: 300000
  ) {
    channels {
      state
      balance
      settle_timeout
      token_network_identifier
      total_deposit
      token_address
      channel_identifier
      partner_address
      reveal_timeout
    }
    errors
  }
}
```
return:
```
{
channels: [
{ state: 'opened',
  balance: 10000,
  settle_timeout: 500,
  token_network_identifier: '0xF2d4b7002c1694D5ca597aD6eD21D8C8959a6355',
  total_deposit: 300000,
  token_address: '0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee',
  channel_identifier: 5,
  partner_address: '0x9013a333d3de90a7eF7531746cb8F537632bf96c',
  reveal_timeout: 50 }
]
errors: null
}
```
```
## PUT create (open) a channel 
```
mutation {
  channels(
    token_address: "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee"
    partner_address: "0x9013a333d3de90a7eF7531746cb8F537632bf96c"
    settle_timeout: 500
    total_deposit: 1337
  ) {
    errors
  }
}
```
## PATCH close a channel 
This request is used to close a channel or to increase the deposit in it.
with "state": "closed"
```
mutation {
  channel_close(
    token_address: "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee"
    partner_address: "0x9013a333d3de90a7eF7531746cb8F537632bf96c"
  ) {
    channels {
      state
    }
    errors
  }
}
```
return:
```
{
  "data": {
    "channel_close": {
      "channels": [
        {
          "state": "closed"
        }
      ],
      "errors": null
    }
  }
}
```
or with error
```
{
  "data": {
    "channel_close": {
      "channels": null,
      "errors": [
        "Attempted to close an already closed channel"
      ]
    }
  }
}
```

## PATCH withdraw a channel 
This request is used to close a channel or to increase the deposit in it.
with "total_withdraw": 100 
```
mutation {
  channel_withdraw(
    token_address: "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee"
    partner_address: "0x9013a333d3de90a7eF7531746cb8F537632bf96c"
    total_withdraw: 300
  ) {
    channels {
      state
      balance
      settle_timeout
      token_network_identifier
      total_deposit
      token_address
      channel_identifier
      partner_address
      reveal_timeout
    }
    errors
  }
}
```
return in 0.100.3 (not implemented yet)
```
{ errors:
   'Nothing to do. Should either provide \'total_deposit\' or \'state\' argument' }
```


## pending_transfers
```
{
  pending_transfers(
    token_address: "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee"
    partner_address: "0x9013a333d3de90a7eF7531746cb8F537632bf96c"
  ) {
    transfers {
      channel_identifier
      payment_identifier
      token_address
      token_network_identifier
      initiator
      channel_identifier
      target
      locked_amount
      role
      transferred_amount
    }
    errors
  }
}
```
return:
```
{
  "data": {
    "pending_transfers": {
      "transfers": [],
      "errors": null
    }
  }
}
```
or with data
```
{
  "data": {
    "pending_transfers": {
      "transfers": [
        {
          "channel_identifier": "6",
          "payment_identifier": "14164638209489862054",
          "token_address": "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee",
          "token_network_identifier": "0xF2d4b7002c1694D5ca597aD6eD21D8C8959a6355",
          "initiator": "0xd2C73673E8C0a13400c7136495dA6fab31618902",
          "target": "0x9013a333d3de90a7eF7531746cb8F537632bf96c",
          "locked_amount": "300",
          "role": "initiator",
          "transferred_amount": "0"
        },
        {
          "channel_identifier": "6",
          "payment_identifier": "15669887581632066647",
          "token_address": "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee",
          "token_network_identifier": "0xF2d4b7002c1694D5ca597aD6eD21D8C8959a6355",
          "initiator": "0xd2C73673E8C0a13400c7136495dA6fab31618902",
          "target": "0x9013a333d3de90a7eF7531746cb8F537632bf96c",
          "locked_amount": "600",
          "role": "initiator",
          "transferred_amount": "0"
        },
        {
          "channel_identifier": "6",
          "payment_identifier": "1829131590973794013",
          "token_address": "0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee",
          "token_network_identifier": "0xF2d4b7002c1694D5ca597aD6eD21D8C8959a6355",
          "initiator": "0xd2C73673E8C0a13400c7136495dA6fab31618902",
          "target": "0x9013a333d3de90a7eF7531746cb8F537632bf96c",
          "locked_amount": "1000",
          "role": "initiator",
          "transferred_amount": "0"
        }
      ],
      "errors": null
    }
  }
}
```


TODO
## connect channel 
```

```

# connections
## list connections
## create connection with funds
```
curl -i -X PUT http://localhost:5001/api/v1/connections/0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee -H 'Content-Type: application/json' -d '{"funds": 4000}'
```
// or
```
curl http://localhost:5001/api/v1/connections
{"0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee": {"funds": 4000, "sum_deposits": 337, "channels": 1}}
```
error:
```
{"errors": "Insufficient balance for token db26e84f"}
```
// or
```
{"errors": "Amount negative"}
```
## leave connection
```
curl -i -X DELETE http://localhost:5001/api/v1/connections/0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee -H 'Content-Type: application/json'
``

## Payments

## GET querying payments events

```
curl -i http://localhost:5001/api/v1/payments
```
// or
```
query {
  payments (
    token_address: '0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee'
    target_address: '0x9013a333d3de90a7eF7531746cb8F537632bf96c'
  ) {
  }
}

```
return:
```

[
  {
    "reason": "lock expired",
    "target": "0x9013a333d3de90a7eF7531746cb8F537632bf96c",
    "event": "EventPaymentSentFailed",
    "log_time": "2019-08-06T06:31:02.280"
  },
  {
    "reason": "lock expired",
    "target": "0x9013a333d3de90a7eF7531746cb8F537632bf96c",
    "event": "EventPaymentSentFailed",
    "log_time": "2019-08-06T07:00:53.490"
  },
  {
    "reason": "there is no route available",
    "target": "0x9013a333d3de90a7eF7531746cb8F537632bf96c",
    "event": "EventPaymentSentFailed",
    "log_time": "2019-08-07T06:34:12.641"
  },
  {
    "reason": "lock expired",
    "target": "0xB0817770896671433fE51707CeA8bEF9de168700",
    "event": "EventPaymentSentFailed",
    "log_time": "2019-08-07T06:40:17.189"
  }
]
```
## POST payments
```
mutations {
  payments (
    token_address: '0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee'
    target_address: '0x9013a333d3de90a7eF7531746cb8F537632bf96c'
    amount: 0
    identifier: 34 // optional 
  ) {


    {
        "event": "EventPaymentReceivedSuccess",
        "amount": 5,
        "initiator": "0x82641569b2062B545431cF6D7F0A418582865ba7",
        "identifier": 1,
        "log_time": "2018-10-30T07:03:52.193"
    },
    
  }
}

```
or with error
```
{
  "data": {
    "channel_payment": {
      "channels": null,
      "errors": [
        "Payment couldn't be completed (insufficient funds, no route to target or target offline)."
      ]
    }
  }
}
```
```
curl -vvv -i -X POST http://localhost:5001/api/v1/payments/0xDb26E84F3C18776FdBD13d5AE4E91eCB5E4978Ee/0x9013a333d3de90a7eF7531746cb8F537632bf96c  -H 'Content-Type: application/json' -d '{"amount": 0, "identifier": 34}'
```
return:
```

```
error:
```
{"errors": "Amount negative"}
```
