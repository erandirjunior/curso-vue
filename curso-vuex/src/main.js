import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/index'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
