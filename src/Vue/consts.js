const ConstsLoader = {};

const Alert = {
    ERROR: 0,
    SUCCESS: 1,
    INFO: 2,
    NOTHING: 3
}

const Links = {
    LOGIN: 0,
    SIGNUP: 1,
    FORGOT_PASSWORD: 2,
    PLAY: 3
}

const Consts = { Alert : Alert, Links: Links };

ConstsLoader.install = function (Vue) {
    Vue.prototype.$getConst = (constObject, key) => {
        return Consts[constObject][key];
    }
}

export default ConstsLoader;
