import React from "react";
import {Switch} from "react-router-dom";

//Component
import asyncComponent from "./../Components/AsyncComponent";

//Routing
// import AppliedRoute from "../Components/Routing/AppliedRoute";
import AuthenticatedRoute from "./../Components/Routing/AuthenticatedRoute";
import UnauthenticatedRoute from "./../Components/Routing/UnauthenticatedRoute";

//Layouts
import AuthenticatedLayout from "../Screens/Layouts/Authenticated/AuthenticatedLayout";
import EmptyLayout from "../Screens/Layouts/EmptyLayout";

//Pages
const AsyncForms = asyncComponent(() => import("./../Screens/Pages/Forms/Forms"));
const AsyncUsers = asyncComponent(() => import("./../Screens/Pages/User/Users"));
const AsyncDashboard = asyncComponent(() => import("./../Screens/Pages/Dashboard/Dashboard"));
const AsyncNotFound = asyncComponent(() => import("./../Screens/Pages/NotFound/NotFound"));

// const AsyncLogin = asyncComponent(() => import("./../Screens/Pages/Account/Login/Login"));
const AsyncRegister = asyncComponent(() => import("./../Screens/Pages/Account/Register/Register"));
const AsyncHome = asyncComponent(() => import("./../Screens/Pages/Home/Home"));

//Router Switch
export default ({childProps}) =>
    <Switch>
        {/*<UnauthenticatedRoute*/}
            {/*path="/"*/}
            {/*component={AsyncHome}*/}
            {/*props={childProps}*/}
            {/*layout={EmptyLayout}*/}
        {/*/>*/}
        <UnauthenticatedRoute
            path="/login"
            component={AsyncHome}
            props={childProps}
            layout={EmptyLayout}
        />
        <UnauthenticatedRoute
            path="/register"
            component={AsyncRegister}
            props={childProps}
            layout={EmptyLayout}
        />
        <AuthenticatedRoute
            path="/"
            exact
            component={AsyncDashboard}
            props={childProps}
            layout={AuthenticatedLayout}
        />
        <AuthenticatedRoute
            path="/dashboard"
            component={AsyncDashboard}
            props={childProps}
            layout={AuthenticatedLayout}
        />
        <AuthenticatedRoute
            path="/forms"
            component={AsyncForms}
            props={childProps}
            layout={AuthenticatedLayout}
        />
        <AuthenticatedRoute
            path="/users"
            component={AsyncUsers}
            props={childProps}
            layout={AuthenticatedLayout}
        />

        {/* Finally, catch all unmatched routes */}
        <AuthenticatedRoute
            component={AsyncNotFound}
            props={childProps}
            layout={AuthenticatedLayout}
        />
        <UnauthenticatedRoute
            component={AsyncNotFound}
            props={childProps}
            layout={AuthenticatedLayout}
        />
    </Switch>;