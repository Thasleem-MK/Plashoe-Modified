import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const BaseRoute = () => {
    return (
        <div>
            <NavBar />
            <div className="mt-16 overflow-hidden">
                <Outlet />
            </div>
        </div>
    )
}

export default BaseRoute
