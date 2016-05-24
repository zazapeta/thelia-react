import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {store} from './reactAppSrc/redux';
import App from './reactAppSrc/components/App';
import Login from './reactAppSrc/components/Login';
import Category from './reactAppSrc/components/Category';
import _404 from './reactAppSrc/components/404';

const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Category}/>
        <Route path="category" component={Category}/>
        <Route path="404" component={_404}/>
        <Route path="login" component={Login}/>
    </Route>
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>, document.getElementById('reactApp')
);

