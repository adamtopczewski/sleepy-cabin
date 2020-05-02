import React from 'react'
import polariod from '../assets/polaroid.png'

export default function Cards() {
    return (
        <div className="container">
            <article className="welcome-card">                
                <div className="text-with-photo mock1">
                    <div>
                    <h1 className='title'>Welcome in sleepy cabins</h1>
                    <p className="description">Set in the middle of a 2,600 nature preserve and surrounded by Appalachian Mountains, rustic and historic Mountain Lake Lodge is the ultimate retreat. 
                    Breathe in crisp, fresh air, dine on gourmet fare and build family memories with fun indoor and outdoor activities.</p>
                    </div>
                    <img src={polariod} className="photo"/>
                </div>
            </article>
            <article className="cabins-card">

                <div className="text-with-photo mock2">
                    <div>
                        <h1 className='title'>And enjoy your stay</h1>
                        <p className="description">We offer a variety of accommodations, from rustic cabins and cozy cottages to lodging in our historic Main Stone Lodge. 
                        Expansive meeting and event venues set the stage for romantic weddings and relaxing business events. 
                        Arrive to an unhurried pace and enjoy adventure and comfort in the heart of Virginia's Blue Ridge Mountains.</p>
                    </div>                    
                    <img src={polariod} className="photo"/>
                </div>
            </article>
        </div>
    )
}
