const express = require('express')
const router = express.Router()
const { 
  getAsteroids,
  getAsteroid,
  createAsteroid,
  updateAsteroid,
  deleteAsteroid,
} = require('../controllers/asteroids.js')

router
.get( '/getAsteroids', getAsteroids )
.get( '/getAsteroid/:asteroidId', getAsteroid )
.put( '/createAsteroid', createAsteroid )
.post( '/updateAsteroid/:asteroidId', updateAsteroid )
.delete( 'deleteAsteroid/:asteroidId', deleteAsteroid )

module.exports = router
