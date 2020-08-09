import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as RoutePath from './shared/utils/routeLink';
import Loadable from 'react-loadable';

const MainComponent = Loadable({
    loader: () => import('./container/MainComponent/MainComponet'),
    loading() {
        return <div>Loading...</div>;
    },
});

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={RoutePath.ROOT} component={MainComponent} />
            </Switch>
        </BrowserRouter>
    );
};
export default Router;
