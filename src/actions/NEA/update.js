const NEA = require('../../models/NEA')

const updateNEA = async ( { NEAId } , data ) => {
  try {
    return updatedNEA = await NEA.updateOne( { _id: NEAId }, data )
  } catch (err) {
    return {
      error: err.name,
      msg: err.message}
  } 
}

module.exports = updateNEA