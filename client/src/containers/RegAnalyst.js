import React from 'react'
import DashboardHOC from '../components/HOC/dashboard'
import AnalystRegister from '../components/Register/AnalystRegister'

export default function RegAnalyst() {
    return (
        <div>
            <DashboardHOC>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Register Analyst</h1>
                </div>
                <AnalystRegister/>
            </DashboardHOC>
        </div>
    )
}
