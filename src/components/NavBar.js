import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><strong>A.J. Romaniello</strong></li>
            </ul>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/resume">Resume</a></li>
                <li className='secondary'><a href="https://github.com/aj-rom/aj-rom.github.io">
                    <img alt="Source Code" src='./assets/GitHub-Mark-Light-64px.png' height='32px' width='32px'/>
                </a></li>
            </ul>
        </nav>
    )
}

export default NavBar