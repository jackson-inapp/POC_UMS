import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '../containers/Login';
import SuperAdminNav from './SuperAdminNav';
import OrgAdminNav from './OrgAdminNav';
import AnalystNav from './AnalystNav';

function MainNav(props) {
    const Autherised = () => {
        let AutherisedNav = '';
        switch (props.loginState.userType) {
            case "super":
                AutherisedNav = <SuperAdminNav />;
                break;
            case 'admin':
                AutherisedNav = <OrgAdminNav />;
                break;
            case 'analyst':
                AutherisedNav = <AnalystNav />;
                break;
            default:
                AutherisedNav = <Login />;
        }
        return AutherisedNav;
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Autherised}></Route>
            </Switch>
        </BrowserRouter>
    )
}

const mapPropsToState = (state) => ({
    loginState: state.login
})

export default connect(mapPropsToState)(MainNav)
