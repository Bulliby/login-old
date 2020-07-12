// ************************************************************************** //
//                                                                            //
//                                                                            //
//   laravel-validation.js                                                    //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/06/10 23:37:15 by bulliby            \     \_\ \     /     //
//   Updated: 2020/07/12 18:16:28 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

/**
 * Handle basic errors with exceptional ones who can see in alert box.
 */

import alert from 'G/alert.vue'

const laravelValidationMixin = {
    methods: {
        laravelErros: function(errors) {
            this.alert = {
                type: this.$getConst('Alert', 'NOTHING'),
                msg: ""
            }
            if (errors.response.status === 422) {
                Object.entries(errors.response.data.errors).forEach((entry) => {
                    const [e_index, error] = entry;
                    this.applyRules(e_index);
                    this[e_index+'Error'] = error.shift();
                });
            } else {
                throw new Error("Something bad happened");
            } 
        },
        applyRules: function(e_index) {
            this.specialRules.forEach((sRule) => {
                if (sRule.rule == e_index) {
                    if (typeof this[sRule['action']] !== 'function') {
                        throw new Error(`You must provide a ${sRule['action']} function`);
                    }
                    this[sRule['action']]();

                    return;
                }
            });
        }
    },
}

export default laravelValidationMixin;
