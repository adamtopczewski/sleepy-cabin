import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cabins" style={{ textDecoration: 'none' }}>Cabins</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
