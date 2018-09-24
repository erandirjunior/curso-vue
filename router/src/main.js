import Vue from 'vue'
import App from './App.vue'
import VueRoter from 'vue-router'

Vue.use(VueRoter)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
