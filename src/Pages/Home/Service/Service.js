import React from 'react';
import './Service.css';
const Service = ({service}) => {

    const {name, img, description, price} = service;

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <h6>Price: ${price}</h6>
            <h6>{description}</h6>
            <button className='btn btn-primary'>Book Now</button>
            
        </div>
    );
};

export default Service;