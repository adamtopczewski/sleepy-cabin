import React from 'react'
import room1 from '../../assets/Cabins/mock1.png'
import room2 from '../../assets/Cabins/mock2.png'
import room3 from '../../assets/Cabins/mock3.png'

import './FeaturedRooms.css'

export default function FeaturedRooms() {
    
    return (
        <>
            <header className="featured-header">
                <h1>Featured Rooms</h1>
            </header>
            <div className="container">
                <section className="featured-rooms">
                    <a className="room" href="">
                        <img src={room1} className="room-img"/>
                        <p className="room-name">Cabin 1</p>
                    </a>
                    <a className="room" href="">
                        <img src={room2} className="room-img"/>
                        <p className="room-name">Cabin 2</p>
                    </a>    
                    <a className="room" href="">
                        <img src={room3} className="room-img"/>
                        <p className="room-name">Cabin 3</p>
                    </a>                       
                </section>
            </div>
        </>
    )
}
