const NEA = require('../../models/NEA')

const findNEA = async ( data ) => {
  try {
    return createdNEA = await NEA.findOne(data)
  } catch (err) {
    return {
      error: err.name,
      msg: err.message}
  } 
}

module.exports = findNEA