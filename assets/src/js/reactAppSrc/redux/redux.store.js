import {createStore, applyMiddleware} from 'redux';
import reducers from './redux.reducers';
import checkAction_MW from './middlewares/checkActions.middleware';
import api_MW from './middlewares/api.middleware';
import thunk_MW from 'redux-thunk';
export default createStore(reducers, applyMiddleware(checkAction_MW, api_MW, thunk_MW));