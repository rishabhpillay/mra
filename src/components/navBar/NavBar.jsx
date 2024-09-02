import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className='nav-bar-component'>

            <div>
                <h3>LOGO</h3>
            </div>
            <div className='nav-bar-links-container' >
                <Link className='nav-bar-link' to={"/home"} >home</Link>
                <Link className='nav-bar-link' to={"/home"} >home</Link>
                <Link className='nav-bar-link' to={"/home"} >home</Link>
                <Link className='nav-bar-link' to={"/home"} >home</Link>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                pd
            </div>


        </div>
    )
}

export default NavBar