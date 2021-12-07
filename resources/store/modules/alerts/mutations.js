export default {
  addAlert(state, { id, text, color }) {
    state.alerts.push({ id, text, color })
  },
  removeAlert(state, id) {
    const alertIndex = state.alerts.findIndex(alert => alert.id === id)
    if (alertIndex !== -1) {
      state.alerts.splice(alertIndex, 1)
    }
  }
}