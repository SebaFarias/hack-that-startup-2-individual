const NEA = require('../../models/NEA')

const addNEA = async ( data ) => {
  try {
    return createdNEA = await NEA.create(data)
  } catch (err) {
    return {
      error: err.name,
      msg: err.message
    }
  } 
}

module.exports = addNEA