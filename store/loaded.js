import { createNamespacedHelpers } from 'vuex'
export const loadedMapper = createNamespacedHelpers('loaded')

export const state = () => ({
  loaded: false,
})

export const getters = {
  isLoaded(state) {
    return state.loaded
  },
}

export const mutations = {
  updateLoaded(state) {
    state.loaded = true
  },
}
