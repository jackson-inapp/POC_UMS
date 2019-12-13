import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../containers/AdminDashboard '
import PasswordChange from '../containers/PasswordChange'

export default function AnalystNav() {
    return (
        <BrowserRouter>
             <Switch>
                <Route path="/" component={Dashboard}></Route>
                <Route path="/chg-pwd" component={PasswordChange}></Route>
            </Switch>
        </BrowserRouter>
    )
}
