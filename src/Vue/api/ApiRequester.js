// ************************************************************************** //
//                                                                            //
//                                                                            //
//   ApiRequester.js                                                          //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2019/03/10 19:10:46 by bulliby            \     \_\ \     /     //
//   Updated: 2020/09/01 20:34:00 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //


import axios from 'axios';

const ApiRequesterLoader = Object.create(null);

class ApiRequester {

    constructor(baseUrl){
        this.baseUrl = baseUrl;
        this.axios = axios.create({
            baseURL: this.baseUrl
        });
        this.initCsrf();
    }

    login(params){
        return this.axios.post(`${this.baseUrl}/login`, params);
    }

    initCsrf() {
        return this.axios.get(`${this.baseUrl}/sanctum/csrf-cookie`);
    }

    register(params){
        return this.axios.post(`${this.baseUrl}/register`, params);
    }

    checkLogin(params){
        return this.axios.post(`${this.baseUrl}/register/login`, params);
    }

    checkEmail(params){
        return this.axios.post(`${this.baseUrl}/register/email`, params);
    }

    forgotPassword(params){
        return this.axios.post(`${this.baseUrl}/forgotpassword`, params);
    }

    verifyEmail(params) {
        return this.axios.get(`${this.baseUrl}/verify`, params);
    }
}

ApiRequesterLoader.install = function (Vue, options) {
    Vue.prototype.$apiRequester = new ApiRequester(options.url);
}

export default ApiRequesterLoader;
