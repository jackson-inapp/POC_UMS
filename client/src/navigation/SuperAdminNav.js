import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../containers/SuperDashboard'
import RegOrganisation from '../containers/RegOrganisation'
import RegOrgAdmin from '../containers/RegOrgAdmin'

export default function SuperAdminNav() {
    return (
        <BrowserRouter>
             <Switch>
                <Route path="/reg-organisation" exact component={RegOrganisation}></Route>
                <Route path="/reg-admin" exact component={RegOrgAdmin}></Route>
                <Route exact path="/" component={Dashboard}></Route>
            </Switch>
        </BrowserRouter>
    )
}
