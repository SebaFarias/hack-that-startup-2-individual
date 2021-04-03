const NEAActions = require('../actions/NEA/index')

exports.add = async ( req, res ) => {
  try {
    const createdNEA = await NEAActions.add(req.body)
    res.status(201).send(createdNEA)
  } catch (err) {
    res.status(404).send(`NEA ${req.params.NEAId} not found`) //ToDo Error code and messagge dinámico
  }
}
exports.addList = async ( req, res ) => {
  try {
    const createdNEAs = await NEAActions.addList(req.body)
    res.status(201).send(createdNEAs)
  } catch (err) {
    res.status(404).send('an error ocurred') //ToDo Arreglar esta cochinada
  }
}
exports.deleteNEA = async ( req, res ) => {
  try {
    const deletedNEA = NEAActions.deleteNEA(req.params)
    res.status(200).send(deletedNEA)
  } catch (error) {
    res.status(404).send(`NEA ${req.params.NEAId} not found`) //ToDo Error code and messagge dinámico
  }
}
exports.findAll = async ( req, res ) => {
  try {
    const allNEAs = await NEAActions.findAll()
    res.status(200).send(allNEAs)
  } catch (err) {
    res.status(404).send('error message') //ToDo Agregar mensaje
  }
}
exports.find = async ( req, res ) => {
  try {
    const requiredNEA = await NEAActions.find(req.params)
    res.status(200).send(requiredNEA)
  } catch (err) {
    res.status(404).send(`NEA ${req.params.NEAId} not found`) //ToDo Error code and messagge dinámico
  }
}
exports.update = async ( req, res ) => {
  try {
    const updatedNEA = await NEAActions.update( req.params, req.body )
    res.status(200).send( updatedNEA )
  } catch (err) {
  res.status(404).send(`NEA ${req.params.NEAId} not found`) //ToDo Error code and messagge dinámico
  }
}