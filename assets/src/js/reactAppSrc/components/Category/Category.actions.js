import * as categoryActionTypes from './Category.actionTypes';
import {CALL_API} from '../../redux/middlewares';
export function fetch(id = '*') {
    console.log('fetch : ', id);
    let endpoint = '/categories';
    let onSuccess = categoryActionTypes.FETCH_SUCCESS;
    if (id !== '*') {
        endpoint += `/${id}`;
        onSuccess = categoryActionTypes.FETCH_ONE_SUCCESS
    }
    return {
        type: CALL_API,
        endpoint,
        onSuccess,
        onProgress: categoryActionTypes.FETCH_IN_PROGRESS,
        onError: categoryActionTypes.FETCH_ERROR,
        onResponse: (response) => {
            return response;
        }
    };
}