import React from 'react'
import DashboardHOC from '../components/HOC/dashboard'
import OrganisationTable from '../components/views/Organisationview'

export default function ViewOrganisation() {
    return (
        <div>
            <DashboardHOC>
                <OrganisationTable/>
            </DashboardHOC>
        </div>
    )
}
