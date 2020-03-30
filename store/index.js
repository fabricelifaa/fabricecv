export const state = () => ({
  isLogged: false,
  sessionKey: '',
  logoutRoute: {
    name: 'Logout'
  }
})

export const mutations = {
  setSession (state, text) {
    state.sessionKey = text
    state.isLogged = true
  },
  removeSession (state) {
    state.sessionKey = ''
    state.isLogged = false
  }
  // toggle (state, menu) {
  //   menu.done = !menu.done
  // },
}
