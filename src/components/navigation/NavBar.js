import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><strong>A.J. Romaniello</strong></li>
            </ul>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/resume'>Resume</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li className='secondary'>
                    <a href="https://github.com/aj-rom/aj-rom.github.io">
                        <div id='github'/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar