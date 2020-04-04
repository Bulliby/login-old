import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Consts from './consts'
import 'element-ui/lib/theme-chalk/index.css'

import { Input, Row, Col, Form, FormItem, Button, Alert} from 'element-ui';

Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Alert)
Vue.use(Consts)

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});

