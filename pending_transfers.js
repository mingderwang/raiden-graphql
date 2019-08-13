const instance = require('./axiosInstance')

class PendingTransfers {
  constructor (token_address, partner_address) {
    this.token_address = token_address
    this.partner_address = partner_address
  }
  async create () {
    var result = await getPendingTransfers(this.token_address, this.partner_address)
    return result
  }
}

async function getPendingTransfers(token_address, partner_address) {
  url = '/pending_transfers/'+token_address+'/'+partner_address
  result = {
    transfers: [],
    errors: []
  } 
  try {
    await instance.get(url)
    .then(response => {
      console.log(response.data)
      result = {
                 transfers: 
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

module.exports = PendingTransfers
