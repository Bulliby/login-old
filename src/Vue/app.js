import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Consts from './consts'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(Consts)

const app = new Vue({
    el: '#app',
    router,
	vuetify,
    render: h => h(App),
});
