import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Input, Menu, MenuItem, Row, Col} from 'element-ui';

 Vue.use(Input)
 Vue.use(Menu)
 Vue.use(MenuItem)
 Vue.use(Row)
 Vue.use(Col)
 
const app = new Vue({
    el: '#app',
    router,
    render: h => h(App),
});

