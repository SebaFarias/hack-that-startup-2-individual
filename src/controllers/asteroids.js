const asteroidMethods = {
  getAsteroids : async ( req, res ) => {
    res.status(200).json({
      message: 'All asteroids',
    })
  },
  getAsteroid : async ( req, res ) => {
    const { asteroidId } = req.params
    res.status(200).json({
      message: `Asteroid ${asteroidId}`,
    })
  },
  createAsteroid : async ( req, res ) => {
    res.status(201).json({
      message: 'Asteroid created',
    })
  },
  updateAsteroid : async ( req, res ) => {
    const { asteroidId } = req.params
    res.status(200).json({
      message: `Asteroid ${asteroidId} updated`,
    })
  },
  deleteAsteroid : async ( req, res ) => {
    const { asteroidId } = req.params
    res.status(200).json({
      message: `Asteroid ${asteroidId} deleted`,
    })
  },
}

module.exports = asteroidMethods