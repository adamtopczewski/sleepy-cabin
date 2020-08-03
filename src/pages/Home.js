import React from 'react'

import Hero from '../components/Hero'
import Cards from '../components/Cards'
import FeaturedCabins from '../components/FeaturedCabins'
import Amenities from '../components/Amenities'


export default function Home() {
    return (
        <>
            <Hero renderClass="home" />
            <Cards />
            <FeaturedCabins />
            <Amenities />
        </>
    )
}
