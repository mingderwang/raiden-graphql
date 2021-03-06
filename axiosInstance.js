/* 
  To share this baseURL for all axios instances 
*/
const axios = require('axios')

// default BASE_URL is "http:localhost:5001" where localhost is the host running your raiden node.

const BASE_URL = "http://localhost:5001"
const instance = axios.create({
  baseURL: BASE_URL+'/api/v1/'
})

module.exports = instance
