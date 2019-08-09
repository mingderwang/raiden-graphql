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
query {
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
