import fetch from 'isomorphic-fetch';
/*import sha1 from 'sha1';
var CryptoJS = require("crypto-js");
let a = pack('H*','70D574DAD2B45A75258384D93422C56B6A4F4BB1888DAC51');
console.log(CryptoJS.HmacSHA1(" ", "70D574DAD2B45A75258384D93422C56B6A4F4BB1888DAC51").toString());*/
//import pack from 'locutus/php/misc/pack';
export const CALL_API = 'CALL_API';

function callApi({endpoint, options, onSuccess, onProgress, onError, onResponse}) {
    let _options = Object.assign({
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 8F2A502B634EE16ECA8812EC1'
        },
    }, options);
    //?sign=a01e3ca18dbaa28b12367eb551160606e7337f70
    return fetch(`./api${endpoint}?sign=a01e3ca18dbaa28b12367eb551160606e7337f70` , _options)
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                let error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then((res) => {
            return onResponse(res);
        });
}

export default store => next => action => {
    if (action.type === CALL_API) {
        callApi(action)
            .then((payload) => {
                next({
                    type: action.onSuccess,
                    payload
                });
            })
            .catch((payload) => {
                next({
                    type: action.onError,
                    payload
                });
            })
    } else {
        next(action);
    }
}