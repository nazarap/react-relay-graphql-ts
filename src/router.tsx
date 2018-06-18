import * as React from 'react';
import { Route, Router, hashHistory } from 'react-router';
import App from './App';

export const AppRouter = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
        </Router>
    );
};