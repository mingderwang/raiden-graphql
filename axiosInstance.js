/* 
  To share this baseURL for all axios instances 
*/

const axios = require('axios')
const instance = axios.create({
  baseURL: 'https://0fa77730.ngrok.io/api/v1/'
})

module.exports = instance
