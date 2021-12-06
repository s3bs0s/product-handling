import axios from 'axios'
import JWTDecode from 'jwt-decode'

export default {
  async login({ commit }, body) {
    try {
      const response = await axios.post('/api/auth/login', body)
      localStorage.setItem('authorizationToken', usuarioDB.data)
      commit('setAuthUser', JWTDecode(response.data))
    } catch (error) {
      return error
    }
  },
  getLocalToken({ commit }) {
    if (localStorage.getItem('authorizationToken')) {
      commit('setAuthUser', JWTDecode(localStorage.getItem('authorizationToken')))
    } else {
      commit('setAuthUser', null)
    }
  }
}