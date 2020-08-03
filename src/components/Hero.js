import React from 'react'
import logo from '../assets/logo.png'
import './Hero.css'
import classNames from 'classnames'

export default function Hero(props) {
        const conditionalClass = classNames('hero', {
            'home': props.renderClass === 'home',
            'cabins': props.renderClass === 'cabins',
            'singleCabin': props.renderClass === 'singleCabin',
            'about': props.renderClass === 'about'
        });

    return (        
        <div className={conditionalClass}>
            <img src={logo} className="hero-logo"/>
            <h6 className="hero-title">{props.title}</h6>
            <p className="hero-text">Get your keys now</p>
        </div>
    )
}
