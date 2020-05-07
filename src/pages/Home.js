import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import Cards from '../components/home/Cards'
import FeaturedRooms from '../components/home/FeaturedRooms'
import Amenities from '../components/home/Amenities'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Cards />
            <FeaturedRooms />
            <Amenities />
        </>
    )
}
