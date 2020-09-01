// ************************************************************************** //
//                                                                            //
//                                                                            //
//   only.js                                                                  //
//                                                        ________            //
//   By: bulliby <wellsguillaume+at+gmail.com>           /   ____/_  _  __    //
//                                                      /    \  _\ \/ \/ /    //
//   Created: 2020/08/29 15:48:50 by bulliby            \     \_\ \     /     //
//   Updated: 2020/08/29 19:32:41 by bulliby             \________/\/\_/      //
//                                                                            //
// ************************************************************************** //

const LibLoader = Object.create(null);

LibLoader.install = function (Vue) {
    Vue.prototype.$lib = [];
    Vue.prototype.$lib.only = (haystack, needles) => {
        let ret = Object.create(null);
        Object.entries(haystack).map(function([key, value]) {
            if (needles.includes(key)) {
                ret[key] = value;
            }
        });
        console.log(ret);
    }
}

export default LibLoader;
