import mongoose from 'mongoose'
const { Schema } = mongoose

module.exports = mongoose.model(
  'Product',
  new Schema({
    name: { type: String, required: true },
    description: String,
    price: Number,
    imageUrl: String,
    qualification: Number,
    create_date: { type: Date, default: Date.now },
  })
)