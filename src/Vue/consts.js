// ************************************************************************** //
//                                                                            //
//                                                                            //
//   consts.js                                                                //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/07/24 16:35:41 by bulliby            \     \_\ \     /     //
//   Updated: 2020/07/24 17:30:33 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

const ConstsLoader = Object.create(null);

const Alert = {
    INFO: 0,
    ERROR: 1,
    SUCCESS: 2,
    WARNING: 3,
    NOTHING: 4
}

const Links = {
    LOGIN: 0,
    SIGNUP: 1,
    FORGOT_PASSWORD: 2,
    PLAY: 3
}

const Consts = { Alert, Links };

ConstsLoader.install = function (Vue) {
    Vue.prototype.$getConst = (constObject, key) => {
        return Consts[constObject][key];
    }
}

export default ConstsLoader;
