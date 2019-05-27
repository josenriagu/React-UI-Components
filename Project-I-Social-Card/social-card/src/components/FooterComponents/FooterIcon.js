import React from 'react';
import './Footer.css';

const anchorclick = (e) => {
    e.preventDefault();
    window.alert('You clicked an icon');
}
const FooterIcon = ({ src, count }) => {
    return (
        <div className='footer-icon' onClick={anchorclick}>
            <div>
                <img src={src} alt='icon'></img>
            </div>
            <div className='count'>{count}</div>
        </div>
    );
}

export default FooterIcon;