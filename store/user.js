import { createNamespacedHelpers } from 'vuex'
import { AuthService } from '@/service/AuthService'
export const userMapper = createNamespacedHelpers('user')

export const state = () => ({
  user: null,
})

export const mutations = {
  setUser(state, user) {
    state.user = { ...user }
  },
  resetUser(state) {
    state.user = null
  },
  updateUrls(state, urls) {
    state.user.urls = urls
  },
  updateColor(state, color) {
    state.user.color = color
  },
  updateTemplate(state, template) {
    state.user.template = template
  },
}

export const getters = {
  getUser(state) {
    return state.user
  },
}

export const actions = {
  async login({ commit }) {
    const authInstance = new AuthService(this.$fb)
    const result = await authInstance.login()
    const userData = await authInstance.createNewAccount(result)
    commit('setUser', userData)
    this.$router.push(`/user/${userData.id}/edit`)
  },

  async relogin({ commit }) {
    this.$fb.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return
      }
      const uid = user.uid
      const authInstance = new AuthService(this.$fb)
      const userData = await authInstance.getUser(uid)
      userData.uid = uid
      this.commit('loaded/updateLoaded')
      commit('setUser', userData)
    })
  },

  async logout({ commit }) {
    const authInstance = new AuthService(this.$fb)
    await authInstance.logout()
    commit('resetUser')
    this.$router.push('/')
  },
}
