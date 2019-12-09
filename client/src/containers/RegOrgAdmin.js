import React from 'react'
import DashboardHOC from '../components/HOC/dashboard'
import OrgAdminRegister from '../components/Register/OrgAdminRegister'

export default function RegOrgAdmin() {
    return (
        <div>
            <DashboardHOC>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Register Oranisation admin</h1>
                </div>
                <OrgAdminRegister/>
            </DashboardHOC>
        </div>
    )
}
