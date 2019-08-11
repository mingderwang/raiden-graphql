const instance = require('./axiosInstance')

class Channels {
  constructor (token_address) {
    this.token_address = token_address
  }
  async create () {
    var result = await getChannel(this.token_address)
    return result
  }
}

async function getChannel(token_address) {
  if (token_address === undefined) {
    url = '/channels' 
  } else {
    url = '/channels/'+token_address
  }
  result = {
    channels: [],
    errors: []
  } 
  try {
    await instance.get(url)
    .then(response => {
      console.log(response.data)
      result = {
                 channels: 
                   response.data
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

module.exports = Channels
