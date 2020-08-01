import React from 'react'
import img1 from '../assets/polaroid1.png'
import img2 from '../assets/polaroid2.png'
// import titleBg from '../../assets/titleSign.png'

import './Cards.css'

export default function Cards() {
    return (
        <div className="container flex-column">
            <article className="welcome-card">                
                <div className="text-with-photo">
                    <div className="card-text">
                        <div className="title-container">                            
                            <h1 className='title'>Welcome in sleepy cabins</h1>
                        </div>                    
                    <p className="description">Set in the middle of a 2,600 nature preserve and surrounded by Appalachian Mountains, rustic and historic Mountain Lake Lodge is the ultimate retreat. 
                    Breathe in crisp, fresh air, dine on gourmet fare and build family memories with fun indoor and outdoor activities.</p>
                    </div>
                    <img src={img1} className="photo"/>
                </div>
            </article>
            <article className="cabins-card">

                <div className="text-with-photo row-reverse">
                    <div className="card-text">
                        <div className="title-container sign-reverse">  
                            <h1 className='title'>And enjoy your stay</h1>
                        </div>
                        <p className="description">We offer a variety of accommodations, from rustic cabins and cozy cottages to lodging in our historic Main Stone Lodge. 
                        Expansive meeting and event venues set the stage for romantic weddings and relaxing business events. 
                        Arrive to an unhurried pace and enjoy adventure and comfort in the heart of Virginia's Blue Ridge Mountains.</p>
                    </div>                    
                    <img src={img2} className="photo"/>
                </div>
            </article>
        </div>
    )
}
