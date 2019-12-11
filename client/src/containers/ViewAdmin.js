import React from 'react'
import DashboardHOC from '../components/HOC/dashboard'
import OrganisationAdminTable from '../components/views/OrganisationAdminview'

export default function ViewAdmin() {
    return (
        <div>
            <DashboardHOC>
                <OrganisationAdminTable/>
            </DashboardHOC>
        </div>
    )
}
