import React from 'react'
import DashboardHOC from '../components/HOC/dashboard'
import ChangePwd from '../components/ChangePwd'

export default function PasswordChange() {
    return (
        <div>
            <DashboardHOC>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Password Change</h1>
                </div>
                <ChangePwd/>
            </DashboardHOC>
        </div>
    )
}
