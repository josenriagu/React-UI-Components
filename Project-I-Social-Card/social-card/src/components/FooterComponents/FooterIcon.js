import React from 'react';
import './Footer.css';

const anchorclick = (e) => {
    e.preventDefault();
    window.alert('You clicked an icon');
}
const FooterIcon = ({ href, icon, count }) => {
    return (
        <div className='footer-icon' onClick={anchorclick}>
            <div>
                <i className={icon}></i>
            </div>
            <div className='count'>{count}</div>
        </div>
    );
}

export default FooterIcon;