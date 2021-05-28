import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PageNotFound from '../pages/page-not-found';

export default () => (
    <Switch>
        <Route exact path="/" render={() => <Redirect to="/landing" />} />
        <Route path="*" component={PageNotFound} />
    </Switch>
);