import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Input, Menu, MenuItem, Row, Col, Form, FormItem, Button} from 'element-ui';

 Vue.use(Input)
 Vue.use(Menu)
 Vue.use(MenuItem)
 Vue.use(Row)
 Vue.use(Col)
 Vue.use(Form)
 Vue.use(FormItem)
 Vue.use(Button)
 
const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});

