import React from 'react'
import DashboardHOC from '../components/HOC/dashboard'
import OrgRegister from '../components/Register/OrgRegister'

export default function RegOrganisation() {
    return (
        <div>
            <DashboardHOC>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Register Organisation</h1>
                </div>
                <OrgRegister/>
            </DashboardHOC>
        </div>
    )
}
