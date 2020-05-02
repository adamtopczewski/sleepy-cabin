// TBD - Whole home page divided into components 
import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'

export default function Home() {
    return (
        <>
            <section className="section">
                <Navbar />
                <Hero />
            </section>
            <section className="section">
                <Cards /> 
            </section>
        </>
    )
}
