import * as React from 'react';
import { Route, Router, hashHistory } from 'react-router';
import List from "./layouts/List";

export const AppRouter = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/list" component={List}/>
        </Router>
    );
};