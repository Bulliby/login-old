const ConstsLoader = {};

const Alert = {
    ERROR: 0,
    SUCCESS: 1,
    NOTHING: 2
}

const Consts = { Alert : Alert };

ConstsLoader.install = function (Vue) {
    Vue.prototype.$getConst = (constObject, key) => {
        return Consts[constObject][key];
    }
}

export default ConstsLoader;
