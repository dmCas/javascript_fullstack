//将types.js所有的
import * as types from '../types'
const state = {
  showSidebar: false
}

const getters = {
  showSidebar: state => state.showSidebar
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR](state, status) {
    state.showSidebar = status
  }
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}