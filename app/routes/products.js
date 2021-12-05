const router = require('express').Router()
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products')

router.get('/', getProducts)
router.get('/:_id', getProduct)
router.post('/', createProduct)
router.put('/', updateProduct)
router.delete('/:_id', deleteProduct)

module.exports = router