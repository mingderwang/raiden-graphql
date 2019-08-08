const instance = require('./axiosInstance')

class Address {
  constructor () {
  }
  async create () {
    var result = await getAddress()
    return result
  }
}

async function getAddress() {
  result = {
  }
  try {
    await instance.get('address').then(response => {
      result = {
        our_address: response.data.our_address 
      } 
    })
  } catch (err) {
    console.error(err)
  }
  return result
}

module.exports = Address
