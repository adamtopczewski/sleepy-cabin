import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/cabins">Cabins</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>                        
                </ul>
            </nav>
    </header>
    )
}
