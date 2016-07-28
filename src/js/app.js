'use strict';
import '../css/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

import Layout from './components/Layout';
import AuthPage from './pages/Auth';
import Gallery from './pages/Gallery';
import auth from './auth';

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        });
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Gallery} onEnter={requireAuth}/>
            <Route path="top(/:username)" component={Gallery} onEnter={requireAuth}></Route>
            <Route path="login(/:type)" component={AuthPage}/>
        </Route>
    </Router>
    , document.getElementById('app')
);