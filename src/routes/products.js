const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

router.get('/', (req, res) => {
  Product.find()
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.post('/', ({ body }, res) => {
  const product = new Product(body)
  product.save()
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.put('/:_id', ({ body, params: { _id } }, res) => {
  Product.findOneAndUpdate({ _id }, body)
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.delete('/:_id', ({ body, params: { _id } }, res) => {
  Product.findOneAndDelete({ _id })
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

module.exports = router