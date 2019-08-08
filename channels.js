const instance = require('./axiosInstance')
class Channels {
  constructor () {
  }
  async create () {
    var result = await getChannel()
    return result
  }
}

async function getChannel() {
  result = {
    id: "0"
  }
  try {
    await instance.get('address').then(response => {
      console.log(response.data)
      result = {
        id: "1" 
      } 
    })
  } catch (err) {
    console.error(err)
  }
  return result
}

module.exports = Channels
