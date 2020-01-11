import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import {Button, Select, Layout} from "element-ui"
import ElementUi from "element-ui"
import service from './utils/http'
import urls from './utils/urls'

// Vue.use(Button).use(Select).use(Layout)
Vue.use(ElementUi)
//把 axios挂载到vue 的原型链上去 使用只需要this.$https.
Vue.prototype.$https = service
Vue.prototype.$urls = urls

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
