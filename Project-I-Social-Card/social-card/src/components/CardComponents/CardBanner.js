import React from 'react';
import './Card.css';

const bannerattribute = {
    src: "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png",
    alt: "react-logo-base"
}

const CardBanner = () => {
    return (
        <div className='card-banner'>
            <img src={bannerattribute.src} alt={bannerattribute.alt} />
        </div>
    );
}

export default CardBanner;