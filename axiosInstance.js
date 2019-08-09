/* 
  To share this baseURL for all axios instances 
*/
const axios = require('axios')

const BASE_URL = "https://838926a4.ngrok.io"
const instance = axios.create({
  baseURL: BASE_URL+'/api/v1/'
})

module.exports = instance