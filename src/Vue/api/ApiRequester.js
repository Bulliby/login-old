// ************************************************************************** //
//                                                                            //
//                                                                            //
//   ApiRequester.js                                                          //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2019/03/10 19:10:46 by bulliby            \     \_\ \     /     //
//   Updated: 2020/03/26 22:04:14 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //


import axios from 'axios';

export default class ApiRequester {

    constructor(baseUrl){
        this.baseUrl = baseUrl;
        this.axios = axios.create({
            baseURL: this.baseUrl
        });
    }

    login(params){
        return this.axios.post(`${this.baseUrl}/login`, params);
    }

    initCsrf() {
        return this.axios.get(`${this.baseUrl}/sanctum/csrf-cookie`);
    }
}

