const ConstsLoader = {};

const Alert = {
    ERROR: 0,
    SUCCESS: 1,
    NOTHING: 2
}

const Links = {
    LOGIN: 0,
    HOME: 1,
    SIGNUP: 2,
    FORGOT_PASSWORD: 3,
    PLAY: 4
}

const Consts = { Alert : Alert, Links: Links };

ConstsLoader.install = function (Vue) {
    Vue.prototype.$getConst = (constObject, key) => {
        return Consts[constObject][key];
    }
}

export default ConstsLoader;
