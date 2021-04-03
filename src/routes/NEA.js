const express = require('express')
const router = express.Router()
const { 
  add,
  addList,
  deleteNEA,
  findAll,
  find,
  update,
} = require('../controllers/NEA.js')

router
.get( '/findAll', findAll )
.get( '/find/:NEAId', find )
.put( '/add', add )
.put('/addList',addList)
.post( '/update/:NEAId', update )
.delete( 'delete/:NEAId', deleteNEA)

module.exports = router
