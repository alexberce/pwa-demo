import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "./../Components/AsyncComponent";
import AppliedRoute from "./../Components/AppliedRoute";
import UnauthenticatedRoute from "./../Components/Routing/UnauthenticatedRoute";
import AuthenticatedRoute from "./../Components/Routing/AuthenticatedRoute";

const AsyncLogin = asyncComponent(() => import("./../Screens/Pages/Account/Login/Login"));
const AsyncRegister = asyncComponent(() => import("./../Screens/Pages/Account/Register/Register"));
const AsyncHome = asyncComponent(() => import("./../Screens/Pages/Home/Home"));
const AsyncAuthenticatedApp = asyncComponent(() => import("./../Screens/App/AuthenticatedApp.js"));
const AsyncNotFound = asyncComponent(() => import("./../Screens/Pages/NotFound/NotFound"));


export default ({ childProps }) =>
    <Switch>
        <AuthenticatedRoute
            path="*"
            exact
            component={AsyncAuthenticatedApp}
            props={childProps}
        />
        <UnauthenticatedRoute
            path="/"
            exact
            component={AsyncHome}
            props={childProps}
        />
        <UnauthenticatedRoute
            path="/login"
            exact
            component={AsyncLogin}
            props={childProps}
        />
        <UnauthenticatedRoute
            path="/register"
            exact
            component={AsyncRegister}
            props={childProps}
        />
        {/* Finally, catch all unmatched routes */}
        <Route component={AsyncNotFound} />
    </Switch>;