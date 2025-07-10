import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/navbar.jsx'
import Footer from '../footer/footer.jsx'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layout
