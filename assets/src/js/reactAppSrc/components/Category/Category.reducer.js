import {Map} from 'immutable';
import * as CategoryActionTypes from './Category.actionTypes';
let initialState = Map({
    status: CategoryActionTypes.FETCH_IN_PROGRESS,
    categories: []
});
export default function CategoryReducer(state = initialState, action) {
    console.log('action  ', action);
    switch (action.type) {
        case CategoryActionTypes.FETCH_ERROR :
            return state.set('status', action.type).set('error', action.payload);
        case CategoryActionTypes.FETCH_IN_PROGRESS:
        case CategoryActionTypes.FETCH_SUCCESS:
            return state.set('status', action.type).set('categories', action.payload);
        case CategoryActionTypes.FETCH_ONE_SUCCESS:
            return state.set('status', action.type).set('categories', action.payload);
        default:
            return state;
    }
}