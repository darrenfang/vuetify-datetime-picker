import 'vuetify/src/styles/main.sass'
import './stylus/main.styl'
import Vue from 'vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import App from './app'

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
