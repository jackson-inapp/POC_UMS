import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './components/Login/Login'
import FormikOrgRegister from './components/Register/OrgRegister'
import FormikOrgAdminRegister from './components/Register/OrgAdminRegister'
import FormikAnalystRegister from './components/Register/AnalystRegister'
function Routes() {
    return (
        <BrowserRouter>
        
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register/org" component={FormikOrgRegister}></Route>
                    <Route path="/register/org_admin" component={FormikOrgAdminRegister}></Route>
                    <Route path="/register/org_analyst" component={FormikAnalystRegister}></Route>
                </Switch>
        
        </BrowserRouter>
    )
}

export default Routes
