import React from 'react'
import logo from '../assets/logo.png'
import './Hero.css'

export default function Hero() {
    return (
        <div className="hero">
            <img src={logo} className="hero-logo"/>
            <p className="hero-text">Get your keys now</p>
        </div>
    )
}