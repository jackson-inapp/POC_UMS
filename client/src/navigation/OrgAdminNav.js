import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../containers/AdminDashboard '
import RegAnalyst from '../containers/RegAnalyst'
import RegOrgAdmin from '../containers/RegOrgAdmin'


export default function OrgAdminNav() {
    return (
        <BrowserRouter>
             <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route path="/reg-admin" component={RegOrgAdmin}></Route>
                <Route path="/reg-analyst" component={RegAnalyst}></Route>
            </Switch>
        </BrowserRouter>
    )
}
