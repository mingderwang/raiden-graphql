const instance = require('./axiosInstance')

class ChannelClose {
  constructor (token_address, partner_address) {
    this.token_address = token_address
    this.partner_address = partner_address
  }
  async create () {
    var result = await closeChannel(this.token_address, this.partner_address)
    return result
  }
}

async function closeChannel(token_address, partner_address) {
  url = '/channels/'+token_address+'/'+partner_address
  data = {
    "state": "closed"
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

module.exports = ChannelClose
