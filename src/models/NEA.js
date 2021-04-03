const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const NEASchema = mongoose.Schema({
  full_name: {
    type: String,
    unique: true,
    required: true,
  },
  a: {
    type: Number,
    min: 0,
    required: true,
  },
  e: {
    type: Number,
    min: 0,
    required: true,
  },
  i: {
    type: Number,
    min: 0,
    max: 180,
    required: true,
  },
  om:{
    type: Number,
    min: 0,
    max: 360,
    required: true,
  },
  w: {
    type: Number,
    min: 0,
    max: 360,
    required: true,
  },
  ma: {
    type: Number,
    min: 0,
    max: 360,
    required: true,
  }
},{
    timestamps: true,
    versionKey: false,  
})

module.exports = mongoose.model( 'NEA' , NEASchema )