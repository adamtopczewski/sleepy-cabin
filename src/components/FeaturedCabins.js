import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Cabin from './Cabin';

import './FeaturedCabins.css';

export default class FeaturedCabins extends Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms: rooms} = this.context;
        rooms = rooms.map( room => {
            return (
                <Cabin key={room.id} room={room} />
            )
        })

        return (
            <>
            <header className="featured-header">
                <h1>Featured Rooms</h1>
            </header>
            <section className="featured-rooms">
                <div className="featured-rooms-center">
                    {loading ? <h1>Loading...</h1> : rooms}
                </div>
            </section>
            </>
        )
    }
}
