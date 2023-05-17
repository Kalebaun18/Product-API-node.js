const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  shop : {
    type : String,
    required : true 
  }
});

module.exports = mongoose.model('product', productSchema);
