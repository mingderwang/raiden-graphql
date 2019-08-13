const instance = require('./axiosInstance')

class Connection {
  constructor (token_address, funds) {
    this.token_address = token_address
    this.funds = funds
  }
  async create () {
    var result = await openConnect(this.token_address, this.funds)
    return result
  }
}

async function openConnect(token_address, funds) {
  url = '/connections/'+token_address
  data = {
    "funds": funds,
  }
  result = {
    channels: [],
    errors: []
  } 
  try {
    await instance.put(url, data, { headers: { 'Content-Type': 'application/json' }})
    .then(response => {
      if (response.data === '') {
      result = {
                 errors: ['204 NO CONTENT, but funds is updated']
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

module.exports = Connection
