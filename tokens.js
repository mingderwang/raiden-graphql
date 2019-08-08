const instance = require('./axiosInstance')

class Tokens {
  constructor () {
  }
  async create () {
    var result = await getTokens()
    return result
  }
}

async function getTokens() {
  result = []
  try {
    await instance.get('tokens').then(response => {
      result = response.data
    })
  } catch (err) {
    console.error(err)
  }
  return result
}

module.exports = Tokens
