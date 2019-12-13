import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../containers/AdminDashboard '
import RegAnalyst from '../containers/RegAnalyst'
import RegOrgAdmin from '../containers/RegOrgAdmin'
import ViewAnalyst from '../containers/ViewAnalyst'
import ViewAdmin from '../containers/ViewAdmin'
import Test from '../components/Register/RegAnalyst'
import PasswordChange from '../containers/PasswordChange'

export default function OrgAdminNav() {
    return (
        <BrowserRouter>
             <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route path="/reg-admin/:id" component={RegOrgAdmin}></Route>
                <Route path="/reg-admin" component={RegOrgAdmin}></Route>
                <Route path="/reg-analyst" component={RegAnalyst}></Route>
                <Route path="/view-analyst/:id" component={RegAnalyst}></Route>
                <Route path="/view-analyst" component={ViewAnalyst}></Route>
                <Route path="/view-admin" component={ViewAdmin}></Route>
                <Route path="/chg-pwd" component={PasswordChange}></Route>
                <Route path="/test/:id" component={Test}></Route>
                <Route path="/test" component={Test}></Route>

            </Switch>
        </BrowserRouter>
    )
}
