const instance = require('./axiosInstance')

class ChannelWithdraw {
  constructor (token_address, partner_address, total_withdraw) {
    this.token_address = token_address
    this.partner_address = partner_address
    this.total_withdraw = total_withdraw
  }
  async create () {
    var result = await withdrawChannel(this.token_address, this.partner_address, this.total_withdraw)
    return result
  }
}

async function withdrawChannel(token_address, partner_address, total_withdraw) {
  url = '/channels/'+token_address+'/'+partner_address
  data = {
    "total_withdraw": total_withdraw
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

module.exports = ChannelWithdraw
