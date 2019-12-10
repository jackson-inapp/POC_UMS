import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './containers/Login'
import MainNav from './navigation/MainNav'

function Routes({...props}) {
    React.useEffect(() => {}, [props.loginState.token]);
    const DisplayRoute = () => props.loginState.login ? <MainNav/> : <Login/>;
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={DisplayRoute}></Route>
            </Switch>
        </BrowserRouter>
    )
}

const mapPropsToState = (state) => ({
    loginState: state
})

export default connect(mapPropsToState)(Routes)
