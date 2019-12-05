import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './components/Login/Login'
import FormikOrgRegister from './components/Register/OrgRegister'
import FormikOrgAdminRegister from './components/Register/OrgAdminRegister'
function Routes() {
    return (
        <BrowserRouter>
        
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register/org" component={FormikOrgRegister}></Route>
                    <Route path="/register/org_admin" component={FormikOrgAdminRegister}></Route>
                </Switch>
        
        </BrowserRouter>
    )
}

export default Routes
