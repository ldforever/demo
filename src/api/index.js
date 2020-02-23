import apiFactory from './factory.js';

import modula from './sub/modula';

const apiList = {
    modula
};

const Api = {};

function getApiList(obj, list) {
    for( let key in list) {
        if (list[key]['url'] ) {
            obj[key] = apiFactory(list[key]);
        } else {
            obj[key] = obj[key] || {};
            getApiList(obj[key], list[key]);
        }
    }
}
getApiList(Api, apiList);
export default Api;
