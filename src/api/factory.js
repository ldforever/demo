import { DataAdapter }  from 'api-adapt';
import http from 'axios';

export default api => {
    let method = api.method === 'post' ? 'post' : 'get';
    return async (params, options = {}) => {
        let {path, payload} = options;
        let url = path ? api.url + path : api.url;

        if(!(params instanceof FormData)) {
            params = params && await new Promise((resolve, reject) => {
                new DataAdapter(params,  api.rules && api.rules.req).then(d => resolve(d));
            });
        }
        return http.request({
            url,
            method,
            ...payload,
            [method === 'get' ? 'params' : 'data'] : params
        }).then(async ({data}) => {
            let status = data.status;
            switch (status) {
                case 'ok': 
                    return data;
                case 'fail':
                    return data;
                case 'error':
                    return data;
                    break;
                default: 
                return Promise.reject(data);   
            } 
        }).catch(res => {
            if (http.isCancel(res)) {
                console.log('Request canceled', res.message);
            } else {
                if(res && res.errNo !== 0) {
                    console.error(`errNo: ${res.errNo}, message: ${res.message}`);
                }
                return Promise.reject(res);
            }
        })
    }
}