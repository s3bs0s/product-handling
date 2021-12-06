export default {
  getAuthUser(state) {
    return state.authUser
  },
  getTokenUser(state) {
    return (state.authUser || {}).token
  }
}