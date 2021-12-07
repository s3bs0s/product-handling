const getLastId = alerts => {
  const orderAlerts = alerts.sort((a, b) => b.id - a.id)
  if (orderAlerts.length > 0) {
    return orderAlerts[0].id + 1
  }
  return 0
}

export default {
  newAlert({ state, commit }, payload) {
    const id = getLastId(state.alerts)
    commit('addAlert', { id, ...payload })
    setTimeout(() => {
      commit('removeAlert', id)
    }, payload.time || 4000)
  },
  closeAlert({ commit }, id) {
    commit('removeAlert', id)
  }
}