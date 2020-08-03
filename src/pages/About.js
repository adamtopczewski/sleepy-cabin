/* TBD */
import React from 'react'
import Hero from '../components/Hero'

export default function About() {
    return (
        <>
            <Hero renderClass="about" title="about" />
            <section className="about-text">
                <h1>
                    Simple reservation website made in react using create-react-app. This project is a practice in design, animations, routing and working with mock data. <br /><br />

                    Since this is a fictional business all the social links, addresses, and contact information are invalid. Backend is mocked using static data.
                </h1>
            </section>
        </>
    )
}
