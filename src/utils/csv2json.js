const https =require('https')
const url = require('url')
const csv = require('csvtojson')

exports.CSVToJSON = ( uri ) => {   
  const options = {
    hostname: url.parse(uri).hostname,
    path: url.parse(uri).path,
    method: 'GET'
  }
  csv()
  .fromStream(https.request( options, res => {
    console.log(JSON.stringify(res))
  }))
}