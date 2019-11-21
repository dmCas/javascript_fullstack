//将types.js所有的
import * as types from '../types'
import { stat } from 'fs'
const state = {
  showSidebar: false,
  searchHistory: ['我曾', '许嵩']
}



const mutations = {
  [types.COM_SHOW_SIDE_BAR](state, status) {
    state.showSidebar = status
  },
  [types.COM_SAVE_SEARCH_HISTORY](state, status) {
    state.searchHistory = status
  }
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  saveSearchHistory ({commit, state}, query) {
    //添加最新搜索记录到数组第一条
    let searchHistory = [query, ...state.searchHistory.slice()]
    //数组去重
    searchHistory = [...new Set(searchHistory)]
    commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
  }
}

const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

export default {
  state,
  getters,
  mutations,
  actions
}