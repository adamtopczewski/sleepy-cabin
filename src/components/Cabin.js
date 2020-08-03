import React from 'react';
import { Link } from 'react-router-dom';
import deafultImg from '../assets/Cabins/cabin1/room1.jpg';
import PropTypes from 'prop-types';
//css
import './Cabin.css';

export default function Room({room}) {
    const {name, slug, images, price} = room;

    return (
        <Link to={`/cabins/${slug}`} className="">
            <article className="room">
                <div className="img-container">
                    <img  src={images[0] || deafultImg} alt="single room"/>
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>per night</p>
                    </div>
                    <p className="room-info">
                    {name}
                    </p>
                </div>
            </article>
        </Link>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}