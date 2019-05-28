import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const cardlink = {
    href: "https://www.reactjs.org"
}

const handleclick = (e) => {    
    window.location.href = cardlink.href;
}

const CardContainer = () => {
    return (
            <div className='card-container' onClick={handleclick}>
                <CardBanner />
                <CardContent />
            </div>
    );
}

export default CardContainer;