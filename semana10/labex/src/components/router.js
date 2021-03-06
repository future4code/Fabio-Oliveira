import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "./home.js"
import CreateTripsPage from "./create-trips.js"
import LoginPage from "./login.js"
import ApplicationFormPage from "./application"
import ApprovalPage from "./approval"
import TripsPage from "./trips"
import AdminHomePage from "./home-admin"
import ErrorPage from "./error"
import UserTrip from "./trips-user.js"

function Router () {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route exact path="/application/:id">
                <ApplicationFormPage />
            </Route>

            <Route exact path="/trips">
                <TripsPage/>
            </Route>

            <Route exact path="/create">
                <CreateTripsPage/>
            </Route>

            <Route exact path="/approval/:id">
                <ApprovalPage/>
            </Route>

            <Route exact path="/login">
                <LoginPage/>
            </Route>

            <Route exact path="/homeadmin">
                <AdminHomePage/>
            </Route>

            <Route exact path="tripsuser">

            </Route>
            <UserTrip />
            <Route>
                <ErrorPage />
            </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Router