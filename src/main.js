import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueClipboards from "vue-clipboards";

Vue.config.productionTip = false
Vue.use(VueClipboards);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
