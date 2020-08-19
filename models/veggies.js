const mongoose = require('mongoose')

const vegetableSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  isGreen: Boolean
}, {
  timestamps: true
});

const Vegetable = mongoose.model('Vegetable', vegetableSchema);

module.exports = Vegetable;