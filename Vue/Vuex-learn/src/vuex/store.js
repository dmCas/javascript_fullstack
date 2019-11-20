import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add(state,n){
    state.count += n
  },
  reduce(state){
    state.count -= 10
  }
}

const actions = {
  //一定要放入参数context 代表执行上下文
  addAction (context, status) {
    //add()成为异步方法
    context.commit('add', status)
  },
  reduceAction ({commit}){
    setTimeout(()=>{
      commit('reduce')
    }, 3000)
    console.log(123)
  }
}

const getters = {
  getCount: (state) => {
    return state.count + 100
  }
}

export default new Vuex.Store({
  //抛出
  state,
  mutations,
  getters,
  actions
})