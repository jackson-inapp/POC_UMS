import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../containers/SuperDashboard'
import RegOrganisation from '../containers/RegOrganisation'
import RegOrgAdmin from '../containers/RegOrgAdmin'
import ViewAdmin from '../containers/ViewAdmin'
import ViewOrganisation from '../containers/ViewOrganisation'
import PasswordChange from '../containers/PasswordChange'

export default function SuperAdminNav() {
    return (
        <BrowserRouter>
             <Switch>
                <Route path="/reg-organisation" exact component={RegOrganisation}></Route>
                <Route path="/reg-admin/:id" exact component={RegOrgAdmin}></Route>
                <Route path="/reg-admin" exact component={RegOrgAdmin}></Route>
                <Route path="/view-organisation" component={ViewOrganisation}></Route>
                <Route path="/view-admin" component={ViewAdmin}></Route>
                <Route path="/chg-pwd" component={PasswordChange}></Route>
                <Route exact path="/" component={Dashboard}></Route>
                
            </Switch>
        </BrowserRouter>
    )
}
