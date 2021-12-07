const Product = require('../models/Product')
const { validateRequestFields } = require('../helpers/validations')
const httpError = require('../helpers/handleErrors')

const getProducts = async ({ user }, res) => {
  try {
    const products = await Product.find({ user_id: user._id })
    res.json(products)
  } catch (error) {
    httpError(res, error)
  }
}

const getProduct = async ({ user, params: { _id } }, res) => {
  try {
    const product = await Product.findOne({ _id, user_id: user._id })
    res.json(product)
  } catch (error) {
    httpError(res, error)
  }
}

const createProduct = async ({ user, body }, res) => {
  try {
    const { validate, field } = validateRequestFields(body, ['name', 'price'])
    if (!validate) {
      throw `El campo "${field}" es requerido`
    }

    const { name, description, price, image_url, qualification } = body
    if (body.hasOwnProperty('qualification')) {
      if (qualification < 0 || qualification > 5) {
        throw 'La calificación debe ser entre 0 o 5 estrellas'
      }
    }

    const product = await new Product({
      name, description, price, image_url, qualification, user_id: user._id
    })
    product.save()
    res.json(product)
  } catch (error) {
    httpError(res, error)
  }
}

const updateProduct = async ({ user, body }, res) => {
  try {
    const { validate, field } = validateRequestFields(body, ['_id', 'name', 'price'])
    if (!validate) {
      throw `El campo "${field}" es requerido`
    }

    const { _id, name, description, price, image_url, qualification } = body
    if (body.hasOwnProperty('qualification')) {
      if (qualification < 0 || qualification > 5) {
        throw 'La calificación debe ser entre 0 o 5 estrellas'
      }
    }

    const update = {
      name, description, price, image_url, qualification
    }
    await Product.findOneAndUpdate({ _id, user_id: user._id }, update)
    res.json({ ...update, _id, user_id: user._id })
  } catch (error) {
    httpError(res, error)
  }
}

const deleteProduct = async ({ user, params }, res) => {
  try {
    if (!params.hasOwnProperty('_id')) {
      throw 'El _id es requerido'
    }

    await Product.findOneAndDelete({ _id: params._id, user_id: user._id })
    res.json({ delete: true })
  } catch (error) {
    httpError(res, error)
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}