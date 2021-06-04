import React from 'react';
import { HashRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import Homepage from 'views/Homepage/Homepage';

const Root = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
        <MainTemplate>
            <Switch>
                <Route path={routes.home} component={Homepage} />
            </Switch>
        </MainTemplate>
    </BrowserRouter>
);

export default Root;