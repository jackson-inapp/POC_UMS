import React from 'react'
import DashboardHOC from '../components/HOC/dashboard'
import AnalystTable from '../components/views/viewAnalyst'

export default function ViewAnalyst() {
    return (
        <div>
            <DashboardHOC>
                <AnalystTable/>
            </DashboardHOC>
        </div>
    )
}
