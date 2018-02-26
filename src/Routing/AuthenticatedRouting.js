import React from "react";
import { Route, Switch } from "react-router-dom";


import asyncComponent from "./../Components/AsyncComponent";
import AppliedRoute from "./../Components/AppliedRoute";
import AuthenticatedRoute from "./../Components/Routing/AuthenticatedRoute";

const AsyncForms = asyncComponent(() => import("./../Screens/Pages/Forms/Forms"));
const AsyncUsers = asyncComponent(() => import("./../Screens/Pages/User/Users"));
const AsyncDashboard = asyncComponent(() => import("./../Screens/Pages/Dashboard/Dashboard"));
const AsyncNotFound = asyncComponent(() => import("./../Screens/Pages/NotFound/NotFound"));

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute
            path="/"
            exact
            component={AsyncDashboard}
            props={childProps}
        />
        <AuthenticatedRoute
            path="/dashboard"
            exact
            component={AsyncDashboard}
            props={childProps}
        />
        <AuthenticatedRoute
            path="/forms"
            exact
            component={AsyncForms}
            props={childProps}
        />
        <AuthenticatedRoute
            path="/users"
            exact
            component={AsyncUsers}
            props={childProps}
        />
        {/* Finally, catch all unmatched routes */}
        <Route component={AsyncNotFound} />
    </Switch>;