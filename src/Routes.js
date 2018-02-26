import React from "react";
import { Route, Switch } from "react-router-dom";


import asyncComponent from "./Components/AsyncComponent";
import AppliedRoute from "./Components/AppliedRoute";
import AuthenticatedRoute from "./Components/Routing/AuthenticatedRoute";
import UnauthenticatedRoute from "./Components/Routing/UnauthenticatedRoute";

const AsyncForms = asyncComponent(() => import("./Screens/Pages/Forms/Forms"));
const AsyncUsers = asyncComponent(() => import("./Screens/Pages/User/Users"));
const AsyncNotFound = asyncComponent(() => import("./Screens/Pages/NotFound/NotFound"));

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute
            path="/"
            exact
            component={AsyncForms}
            props={childProps}
        />
        <UnauthenticatedRoute
            path="/login"
            exact
            component={AsyncForms}
            props={childProps}
        />
        <UnauthenticatedRoute
            path="/signup"
            exact
            component={AsyncForms}
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