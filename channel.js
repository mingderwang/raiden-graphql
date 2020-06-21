const instance = require('./axiosInstance')

class Channel {

  constructor(token_address, partner_address, settle_timeout, total_deposit, reveal_timeout) {
    this.token_address = token_address
    this.partner_address = partner_address
    this.settle_timeout = settle_timeout
    this.total_deposit = total_deposit
  }

  async create () {
    var result = await createChannel(this.token_address, this.partner_address, this.settle_timeout, this.total_deposit, this.reveal_timeout)
    return result
  }
}

async function createChannel(token_address, partner_address, settle_timeout, total_deposit, reveal_timeout) {
  url = '/channels'
  data = {
    "token_address": token_address,
    "partner_address": partner_address,
    "settle_timeout": settle_timeout,
    "total_deposit": total_deposit,
    "reveal_timeout": reveal_timeout
  }
  result = {
  }
  try {
    await instance.put(url, data, { headers: { 'Content-Type': 'application/json' }})
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

module.exports = Channel
