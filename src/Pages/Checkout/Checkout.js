import React from 'react';
import coach from '../../images/coach.jpg';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className="container">
        <div className="checkout-photo">
            <img src={coach} alt="" />
        </div>
        <div className="checkout-text">
            <h5>a few words about me</h5>
            <h1>Read My Story</h1>
            <h4>“I am the creator of a Training Programs, personal coach and a writer. ”</h4>
            <p>Being fit and living healthy is what I know and love. Fitness has always been a part of my life. I grew up in a fit family—my dad ran marathons, we had a home gym, and my parents always had gym memberships</p>
            
            
        </div>

    </div>
    );
};

export default Checkout;