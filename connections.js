const instance = require('./axiosInstance')

class Connections {
  constructor () {
  }
  async create () {
    var result = await getConnections()
    return result
  }
}

async function getConnections() {
  result = []
  try {
    await instance.get('connections').then(response => {
      let a = response.data
        var i = Object.keys(a).length
        for (var j = 0; j < i; j++) {
          x = Object.values(a)[j]
          x['token_address']=Object.keys(a)[j]
          result.push(x);
        }
    })
  } catch (err) {
    console.error(err)
  }
  return result
}

module.exports = Connections
