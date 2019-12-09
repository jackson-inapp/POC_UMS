import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './containers/Login'
import FormikOrgRegister from './components/Register/OrgRegister'
import FormikOrgAdminRegister from './components/Register/OrgAdminRegister'
import FormikAnalystRegister from './components/Register/AnalystRegister'
import Header from './containers/Dashboard'
function Routes() {
    return (
        <BrowserRouter>
        
                <Switch>
                    <Route exact path="/" component={Header}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register/org" component={FormikOrgRegister}></Route>
                    <Route path="/register/org_admin" component={FormikOrgAdminRegister}></Route>
                    <Route path="/register/org_analyst" component={FormikAnalystRegister}></Route>
                </Switch>
        
        </BrowserRouter>
    )
}

export default Routes
