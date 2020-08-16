import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Consts from './consts'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import ApiRequester from './api/ApiRequester'

Vue.use(Vuelidate)
Vue.use(Consts)
//TODO load url from ENV ?
Vue.use(ApiRequester, {url: 'http://auth-belotte2'})

const app = new Vue({
    el: '#app',
    router,
	vuetify,
    render: h => h(App),
});
