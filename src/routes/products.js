const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

router.get('/:_id?', ({ params: { _id } }, res) => {
  let findProduct = Product.find
  if (_id) {
    findProduct = Product.findOne
  }
  
  findProduct()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})

router.post('/', ({ body }, res) => {
  const product = new Product(body)
  product.save()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})

router.put('/:_id', ({ body, params: { _id } }, res) => {
  Product.findOneAndUpdate({ _id }, body)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})

router.delete('/:_id', ({ body, params: { _id } }, res) => {
  Product.findOneAndDelete({ _id })
    .then(() => res.status(200).json({ delete: true }))
    .catch(error => res.status(500).json(error))
})

module.exports = router