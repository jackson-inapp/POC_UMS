import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../containers/SuperDashboard'
import RegOrganisation from '../containers/RegOrganisation'
import RegOrgAdmin from '../containers/RegOrgAdmin'

export default function SuperAdminNav() {
    return (
        <BrowserRouter>
             <Switch>
                <Route path="/" component={Dashboard}></Route>
                <Route path="/reg-admin" component={RegOrgAdmin}></Route>
                <Route path="/reg-organisation" component={RegOrganisation}></Route>
            </Switch>
        </BrowserRouter>
    )
}
