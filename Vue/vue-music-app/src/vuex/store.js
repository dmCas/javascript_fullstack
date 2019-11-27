import Vue from 'vue'
import Vuex from 'vuex'
import com from './modules/com'
import music from './modules/music'
import playlist from './modules/playlist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    com,
    music,
    playlist
  }
})