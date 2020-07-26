import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShuttleVan, faHiking, faCamera } from '@fortawesome/free-solid-svg-icons'

import './Amenities.css'

export default function Amenities() {
    return (
        <>
        <header className="amenities-header">
            <h1 >Amenities</h1>
        </header>
        <div className="container">
            <section className="amenities">
                <div className="amenity">
                    <FontAwesomeIcon icon={faCoffee} className="amenity-icon"/>
                    <h1 className="amenity-header">Free coffee</h1>
                    <p className="amenity-desc">You'll be provided with free breakfast and coffe</p>
                </div>
                <div className="amenity">
                    <FontAwesomeIcon icon={faShuttleVan} className="amenity-icon"/>
                    <h1 className="amenity-header">Free shuttle</h1>
                    <p className="amenity-desc">We will transport you from your airport to our sleepy cabins</p>
                </div>
                <div className="amenity">
                    <FontAwesomeIcon icon={faHiking} className="amenity-icon"/>
                    <h1 className="amenity-header">Outdoors</h1>
                    <p className="amenity-desc">Breath of fresh air coming from Blue Ridge Mountains</p>
                </div>
                <div className="amenity">
                    <FontAwesomeIcon icon={faCamera} className="amenity-icon"/>
                    <h1 className="amenity-header">Great sights</h1>
                    <p className="amenity-desc">Mountains, forests, lakes and many more...</p>
                </div>
            </section>
        </div>
        </>
    )
}
