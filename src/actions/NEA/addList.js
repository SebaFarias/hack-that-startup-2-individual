const NEA = require('../../models/NEA')
const { CSVToJSON } = require('../../utils/csv2json') 

const addListFromJSON = async ( data ) => {
  try {
    return createdNEAs = await NEA.create( data )
  } catch (err) {
    return {
      error: err.name,
      msg: err.message
    }
  } 
}

const addListFromCSV = async ( url ) => {
  console.log(url)
  try {
    return CSVToJSON( url )
  } catch (err) {
    return {
      error: err.name,
      msg: err.message
    }
  }
}

const addNEAList = async ( data ) => {
  try {
    return data.url ? 
    addListFromCSV( data.url )
    :
    addListFromJSON( data )    
  } catch (err) {
    return {
      error: err.name,
      msg: err.message
    }
  } 
}

module.exports = addNEAList