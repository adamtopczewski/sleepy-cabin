import React from 'react';
import CabinsList from './CabinsList';
import CabinsFilter from './CabinsFilter';
import { withRoomConsumer } from '../Context';

function CabinContainer({context}){
    const {loading, sortedRooms, rooms} = context;
    if(loading){
        return (
            <h3>loading data...</h3>
        )
    }

    return(
        <>
        <CabinsFilter rooms={rooms} />
        <CabinsList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(CabinContainer)