import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../containers/AdminDashboard '

export default function AnalystNav() {
    return (
        <BrowserRouter>
             <Switch>
                <Route path="/" component={Dashboard}></Route>
            </Switch>
        </BrowserRouter>
    )
}
