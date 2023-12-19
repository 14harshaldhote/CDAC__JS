import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Menu() {
    return (
        <>
            <nav>
                <li>
                    <Link to="/" >HOME</Link>

                </li>
                <li><Link to="about" >ABOUT</Link></li>
                <li><Link to="contact" >CONTACT</Link></li>
                <li><Link to="services">SERVICES</Link></li>
            </nav>
            <Outlet/>


        </>
    )
}

export default Menu