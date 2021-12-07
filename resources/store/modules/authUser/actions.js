import axios from 'axios'
import JWTDecode from 'jwt-decode'

export default {
  async login({ commit }, body) {
    try {
      const { data } = await axios.post('/api/auth/login', body)
      commit('setAuthUser', { ...JWTDecode(data.token), token: data.token })
      localStorage.setItem('authorizationToken', data.token)
    } catch (catchError) {
      console.error(catchError)
      const { response: { data: error } } = catchError
      throw error
    }
  },
  async register(vuex, body) {
    try {
      await axios.post('/api/auth/register', body)
    } catch (catchError) {
      console.error(catchError)
      const { response: { data: error } } = catchError
      throw error
    }
  },
  logout({ commit }) {
    commit('setAuthUser', null)
    localStorage.removeItem('authorizationToken')
  },
  getLocalToken({ commit }) {
    if (localStorage.getItem('authorizationToken')) {
      commit('setAuthUser', JWTDecode(localStorage.getItem('authorizationToken')))
    } else {
      commit('setAuthUser', null)
    }
  }
}