const instance = require('./axiosInstance')

class ChannelDeposit {
  constructor (token_address, partner_address, total_deposit) {
    this.token_address = token_address
    this.partner_address = partner_address
    this.total_deposit = total_deposit
  }
  async create () {
    var result = await depositChannel(this.token_address, this.partner_address, this.total_deposit)
    return result
  }
}

async function depositChannel(token_address, partner_address, total_deposit) {
  url = '/channels/'+token_address+'/'+partner_address
  data = {
    "total_deposit": total_deposit
  }
  result = {
    channels: [],
    errors: []
  } 
  try {
    await instance.patch(url, data, { headers: { 'Content-Type': 'application/json' }})
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

module.exports = ChannelDeposit
