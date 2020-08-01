import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import './CabinsFilter.css'

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function CabinsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    //Unique cabin types of cabins
    let types = getUnique(rooms, "type");
    //Adding all for showing all cabins
    types = ['all', ...types];
    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container container">
            <form className="search-rooms">
                {/*type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice}
                        id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">cabin size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange}
                            className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange}
                            className="size-input" />
                    </div>
                </div>
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )

}