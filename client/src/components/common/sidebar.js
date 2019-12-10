import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../Redux/Action'

function sidebar( props ) {
    console.log(props)
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar sidebar-height">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">
                                    <span data-feather="home"></span>
                                    Dashboard <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            { (props.loginState.userType === 'super') && <li className="nav-item">
                                <a className="nav-link" href="/reg-organisation">
                                    <span data-feather="file"></span>
                                    Add Organisation
                                </a>
                            </li>}
                            { ((props.loginState.userType === 'super') || (props.loginState.userType === 'admin')) && <li className="nav-item">
                                <a className="nav-link" href="/reg-admin">
                                    <span data-feather="file"></span>
                                    Add Organisation Admin
                                </a>
                            </li>}
                            { (props.loginState.userType === 'admin')  && <li className="nav-item">
                                <a className="nav-link" href="/reg-analyst">
                                    <span data-feather="file"></span>
                                    Add Analyst
                                </a>
                            </li>}
                            <li className="nav-item" onClick={props.logOutMethod}>
                                <a className="nav-link active" href="#">
                                    <span data-feather="home"></span>
                                    LogOut <span className="sr-only">(current)</span>
                                </a>
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
const mapPropsToState = ( state ) => ({
    loginState : state.login
})

const mapDispatchToProps = dispatch => ({
    logOutMethod: () => dispatch(logout())
});

export default connect(mapPropsToState,mapDispatchToProps)(sidebar)