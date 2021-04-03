const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const NEARoutes = require('./routes/NEA')

const app = express()

app.use(morgan("common"))
app.use(express.json())
app.use(helmet())
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}))

app.use('/api/v1/NEA',NEARoutes)
app.get('/', ( req, res ) => {
  res.status(200).json({
    message: "Ok"
  })
})

module.exports = app