const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const asteroidSchema = mongoose.Schema({

},{
    timestamps: true,
    versionKey: false,  
})

module.exports = mongoose.model( 'Asteroid' , asteroidSchema )