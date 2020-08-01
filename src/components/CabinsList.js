import React from 'react';
import Cabin from './Cabin';
import './CabinsList.css'

export default function CabinsList({rooms}) {
    if(rooms.length === 0){
        return (
            <div className="empty">
                <h6>Couldn't find cabins that match your paramaters</h6>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center"> 
                {
                    rooms.map(room => <Cabin key={room.id} room={room}/>)
                }
            </div>
        </section>
    )
}
