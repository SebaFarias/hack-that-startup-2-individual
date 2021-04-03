require('dotenv').config()
const mongoose = require('mongoose')

const uri = process.env.DBURI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

mongoose.connect( uri , options)
  .then(() => console.log('Conectado a la base de datos de Asteroides'))
  .catch( e => console.error('DB error:', e ))
