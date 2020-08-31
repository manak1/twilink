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
  addUrl(state) {
    state.user.urls.push({
      id: Math.random().toString(36).substr(0, 32),
      url: '',
      text: 'おっすらおらボタン',
    })
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
      console.log(user, 'check me')
      const uid = user.uid
      const authInstance = new AuthService(this.$fb)
      const userData = await authInstance.getUser(uid)
      this.commit('loaded/updateLoaded')
      commit('setUser', userData)
    })
  },

  async relogin2({ commit }, user) {
    const authInstance = new AuthService(this.$fb)
    const userData = await authInstance.getUser(user.uid)
    commit('setUser', userData)
  },

  async logout({ commit }) {
    const authInstance = new AuthService(this.$fb)
    await authInstance.logout()
    commit('resetUser')
    this.$router.push('/')
  },
}
