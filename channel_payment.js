const instance = require('./axiosInstance')

class ChannelPayment {
  constructor (token_address, target_address, amount) {
    this.token_address = token_address
    this.target_address = target_address
    this.amount = amount
  }
  async create () {
    var result = await payment(this.token_address, this.target_address, this.amount)
    return result
  }
}

async function payment(token_address, target_address, amount) {
  url = '/payments/'+token_address+'/'+target_address
  data = {
    "amount": amount
  }
  result = {
    channels: [],
    errors: []
  } 
  try {
    await instance.post(url, data, { headers: { 'Content-Type': 'application/json' }})
    .then(response => {
      console.log(response.data)
      result = {
                 channels: 
                   [ response.data ]
               }
    })
    .catch((err) => {
     console.error(err.response.data)
              if ((typeof err.response.data.errors) === 'string') {
                result = {
                  errors: [
                            err.response.data.errors
                          ]
                }
              } else {
              result = {
                  errors: err.response.data.errors
                }
              }
             })
   } catch (err) {
    console.error(err.response.data)
  }
  return result
}

module.exports = ChannelPayment
