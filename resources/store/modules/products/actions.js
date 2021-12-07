import axios from 'axios'

export default {
  async fetchProducts({ commit }) {
    try {
      const headers = { authorization: localStorage.getItem('authorizationToken') }
      const { data } = await axios.get('/api/products', { headers })
      commit('setProducts', data)
    } catch ({ response: { data: error } }) {
      throw error
    }
  },
  async saveProduct({ commit }, body) {
    try {
      const headers = { authorization: localStorage.getItem('authorizationToken') }
      const { data } = await axios.post('/api/products', body, { headers })
      commit('addProduct', data)
    } catch ({ response: { data: error } }) {
      throw error
    }
  },
  async editProduct({ commit }, body) {
    try {
      const headers = { authorization: localStorage.getItem('authorizationToken') }
      const { data } = await axios.put('/api/products', body, { headers })
      commit('updateProduct', data)
    } catch ({ response: { data: error } }) {
      throw error
    }
  },
  async removeProduct({ commit }, id) {
    try {
      const headers = { authorization: localStorage.getItem('authorizationToken') }
      await axios.delete(`/api/products/${id}`, { headers })
      commit('deleteProduct', id)
    } catch ({ response: { data: error } }) {
      throw error
    }
  }
}