import VueCookies from 'vue-cookies'
export const user = {
  namespaced: true,
  state() {
    return {
      userInfo: {
        name: '',
        email: '',
        phone: '',
        lang: ''
      }
    }
  },
  getters: {},
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      VueCookies.set('userInfo', userInfo, '1h')
    },
    clearUserInfo(state) {
      state.userInfo = {}
    }
  },
  actions: {}
}
