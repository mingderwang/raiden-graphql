/* 
  To share this baseURL for all axios instances 
*/
const axios = require('axios')

const BASE_URL = "http://0b8df90d.ngrok.io"
const instance = axios.create({
  baseURL: BASE_URL+'/api/v1/'
})

module.exports = instance
