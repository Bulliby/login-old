const ConstsLoader = {};

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

const Consts = { Alert : Alert, Links: Links };

ConstsLoader.install = function (Vue) {
    Vue.prototype.$getConst = (constObject, key) => {
        return Consts[constObject][key];
    }
}

export default ConstsLoader;
