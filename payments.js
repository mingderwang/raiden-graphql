const instance = require('./axiosInstance')

class Payments {
  constructor (token_address, target_address) {
    this.token_address = token_address
    this.target_address = target_address
  }
  async create () {
    var result = await getPayments(this.token_address, this.target_address)
    return result
  }
}

async function getPayments(token_address, target_address) {
  url = '/payments/'+token_address+'/'+target_address
  result = []
  try {
    await instance.get(url)
    .then(response => {
      result = response.data
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

module.exports = Payments
