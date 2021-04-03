const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const NEASchema = mongoose.Schema({

},{
    timestamps: true,
    versionKey: false,  
})

module.exports = mongoose.model( 'NEA' , NEASchema )