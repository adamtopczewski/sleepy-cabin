import React from 'react'

import Hero from '../components/Hero'
import Cards from '../components/Cards'
import FeaturedRooms from '../components/FeaturedRooms'
import Amenities from '../components/Amenities'


export default function Home() {
    return (
        <>
            <Hero />
            <Cards />
            <FeaturedRooms />
            <Amenities />
        </>
    )
}
