import React from 'react'
import DashboardHOC from '../components/HOC/dashboard'

export default function AnalystDashboard() {
    return (
        <div>
            <DashboardHOC>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Analyst Dashboard</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button className="btn btn-sm btn-outline-secondary">Share</button>
                        </div>
                    </div>
                </div>
            </DashboardHOC>
        </div>
    )
}
