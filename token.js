const instance = require('./axiosInstance')

class Token {

  constructor (address) {
    this.address = address
  }

  async create () {
    if (this.address === undefined) {
      return null
    }
    var result = await setTokens(this.address)
    return result
  }
}

async function setTokens(address) {
  result = {
  }
  try {
    await instance.put('/tokens/'+address)
            .then(function (response) {
	      result = response.data
            })
            .catch(function (err) {
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
             }
	    )
  } catch (err) {
    console.error(err)
  }
  return result
}

module.exports = Token
