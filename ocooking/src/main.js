import Vue from 'vue'
import App from './App.vue'


// TIPS import du fichier global de style
import './assets/scss/main.scss'

import router from './plugins/router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
