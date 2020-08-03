import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Hero from '../components/Hero';
import polaroidTemplate from '../assets/polaroidTransparent.png'
import './SingleCabin.css';


export default class SingleCabin extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            showImg: null
        }
        this.changeImage = this.changeImage.bind(this)
    }

    static contextType = RoomContext;

    changeImage(event) {
       let clicked = event.target.src;
       this.setState({
           showImg: clicked
       }) 
    }
    
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (
                <h3>didn't find room</h3>
            )
        }

        const {name, description, capacity, 
            size, price, extras, breakfast, pets, images} = room
        
        const [mainImg, ...defaultImg] = images;

        return (
            <>
                <Hero renderClass="singleCabin" title={name} />
                <section className="single-room">
                    <article className="cabin-images">
                        <div div className="single-room-main-image">
                            <img src={ polaroidTemplate }
                            style={{backgroundImage: `url(${this.state.showImg ? this.state.showImg : mainImg})`}}
                            alt={name}/>
                        </div>
                        <div className="single-room-images">
                            {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} onClick={this.changeImage}/>
                            })}
                        </div>
                    </article>
                    
                    <div className="single-room-info">
                        <article className="desc">                            
                            <h3>details</h3>
                            <p>{description}</p>
                            <article className="info">
                                <h3>info</h3>
                                <h6>price: ${price}</h6>
                                <h6>size: {size} SQFT</h6>
                                <h6>max capacity: 
                                    {capacity > 1 ? `${capacity} people`: `${capacity} person`}
                                </h6>
                                <h6>{pets ? "pets are allowed": "no pets allowed"}</h6>
                                <h6>{breakfast && "free breakfast included"}</h6>
                            </article>
                        </article>
                    </div>
                </section>

                
                <section className="room-extras">
                        <h6>extras</h6>
                        <ul className="extras">
                            {extras.map((item, index) => {
                                return <li key={index}>- {item}</li>
                            })}
                        </ul>
                </section>
            </>

        )
    }
}
