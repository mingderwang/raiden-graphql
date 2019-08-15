/* 
  To share this baseURL for all axios instances 
*/
const axios = require('axios')

// default BASE_URL should be "http:localhost:5001" where localhost is running the raiden node.

const BASE_URL = "https://51213b86.ngrok.io"
const instance = axios.create({
  baseURL: BASE_URL+'/api/v1/'
})

module.exports = instance
