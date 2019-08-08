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
