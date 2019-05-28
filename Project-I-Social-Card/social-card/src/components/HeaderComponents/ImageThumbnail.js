import React from 'react';
import './Header.css';

const thumbnailattribute = {
    src: "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png",
    alt: "lambda-logo-red"
}

const ImageThumbnail = () => {
    return (
        <div className = 'image-thumbnail'>
            <img src={thumbnailattribute.src} alt={thumbnailattribute.alt} />
        </div>
    );
}

export default ImageThumbnail;