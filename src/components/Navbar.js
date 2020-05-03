import React from 'react'
import './Nav.css'

export default function Navbar() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Cabins</li>
                    <li className="nav-item">About</li>                        
                </ul>
            </nav>
    </header>
    )
}
