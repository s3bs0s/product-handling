export default {
  setProducts(state, products) {
    state.products = products
  },
  addProduct(state, product) {
    state.products.push(product)
  },
  updateProduct(state, product) {
    const productIndex = state.products.findIndex(productFinder => productFinder._id === product._id)

    if (productIndex !== -1) {
      state.products[productIndex] = product
    }
  },
  deleteProduct(state, id) {
    const productIndex = state.products.findIndex(productFinder => productFinder._id === id)

    if (productIndex !== -1) {
      state.products.splice(productIndex, 1)
    }
  }
}