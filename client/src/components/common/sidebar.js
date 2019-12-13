import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../Redux/Action'
import { NavLink } from 'react-router-dom'

function sidebar(props) {
    console.log(props)
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar sidebar-height">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link" activeClassName="selected">
                                    Dashboard
                                </NavLink>
                            </li>
                            {(props.loginState.userType === 'super') && <li className="nav-item">
                                <NavLink to="/reg-organisation" className="nav-link" activeClassName="selected">
                                    Add Organisation
                                </NavLink>
                                <NavLink to="/view-organisation" className="nav-link" activeClassName="selected">
                                    View Organisations
                                </NavLink>
                            </li>}
                            {((props.loginState.userType === 'super') || (props.loginState.userType === 'admin')) && <li className="nav-item">
                                <NavLink to="/reg-admin" className="nav-link" activeClassName="selected">
                                    Add Organisation Admin
                                </NavLink>
                                <NavLink to="/view-admin" className="nav-link" activeClassName="selected">
                                    View Admins
                                </NavLink>
                            </li>}
                            {(props.loginState.userType === 'admin') && <li className="nav-item">
                                <NavLink to="/reg-analyst" className="nav-link" activeClassName="selected">
                                    Add Analyst
                                </NavLink>
                                <NavLink to="/view-analyst" className="nav-link" activeClassName="selected">
                                    View Analysts
                                </NavLink>
                            </li>}
                            <li className="nav-item">
                                <NavLink to="/chg-pwd" className="nav-link" >
                                    Change Password
                                </NavLink>
                            </li>
                            <li className="nav-item" onClick={props.logOutMethod}>
                                <NavLink to="#" className="nav-link" >
                                    LogOut
                                </NavLink>
                            </li>
                        </ul>
                        {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Saved reports</span>
                            <a className="d-flex align-items-center text-muted" href="#">
                                <span data-feather="plus-circle"></span>
                            </a>
                        </h6> */}
                    </div>
                </nav>
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    {props.children}
                </main>
            </div>
        </div>
    )
}
const mapPropsToState = (state) => ({
    loginState: state.login
})

const mapDispatchToProps = dispatch => ({
    logOutMethod: () => dispatch(logout())
});

export default connect(mapPropsToState, mapDispatchToProps)(sidebar)