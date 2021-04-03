const NEA = require('../../models/NEA')

const deleteNEAById = async ({ NEAId }) => {
  try {
    return createdNEA = await NEA.deleteOne({ _id: NEAId })
  } catch (err) {
    return {
      error: err.name,
      msg: err.message}
  } 
}

module.exports = deleteNEAById