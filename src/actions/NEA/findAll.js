const NEA = require('../../models/NEA')

const findAllNEA = async ( ) => {
  try {
    return createdNEA = await NEA.find()
  } catch (err) {
    console.log(err)
    return {
      error: err.name,
      msg: err.message}
  } 
}

module.exports = findAllNEA