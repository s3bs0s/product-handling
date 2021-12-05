const mongoose = require('mongoose')
const { Schema } = mongoose

module.exports = mongoose.model(
  'Product',
  new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image_url: String,
    qualification: { type: Number, default: 0 },
    user_id: { type: String, required: true },
    create_at: { type: Date, default: Date.now },
  })
)