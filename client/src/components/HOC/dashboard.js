import React from 'react'
import Header from '../common/Header'
import Sidebar from '../common/sidebar'

export default function dashboard(props) {
    return (
        <>
            <Header></Header>
            <Sidebar>
                {props.children}
            </Sidebar>
        </>
    )
}
