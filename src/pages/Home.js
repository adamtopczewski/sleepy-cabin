// TBD - Whole home page divided into components 
import React from 'react'
import logo from '../assets/sleepy-logo.png'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <>
        <div className="container">
            <div className="hero">
                <Navbar />
                <img src={logo} className="hero-logo"/>
                <p className="hero-text">Get your keys now</p>
            </div>
        </div>
        <div className="container">
        </div>
        </>
    )
}
