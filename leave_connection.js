const instance = require('./axiosInstance')

class LeaveConnection {
  constructor (token_address) {
    this.token_address = token_address
  }
  async create () {
    var result = await leaveConnect(this.token_address)
    return result
  }
}

async function leaveConnect(token_address) {
  url = '/connections/'+token_address
  result = {
    channels: [],
    errors: []
  } 
  try {
    await instance.delete(url)
    .then(response => {
      console.log(response)
      if (response.data === '') {
      result = {
                 errors: ['204 NO CONTENT']
               }
      } else {
      result = {
                 channels: 
                   [ response.data ]
               }
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

module.exports = LeaveConnection
