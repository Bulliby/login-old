// ************************************************************************** //
//                                                                            //
//                                                                            //
//   only.js                                                                  //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/08/29 15:48:50 by bulliby            \     \_\ \     /     //
//   Updated: 2020/08/29 15:57:27 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

const LibLoader = Object.create(null);

LibLoader.install = function (Vue) {
    Vue.prototype.$lib = [];
    Vue.prototype.$lib.only = (haystack, needles) => {
        return Object.entries(haystack).filter(function([key, value]) {
            return needles.includes(key) ? arguments : false;
        });
    }
}

export default LibLoader;
