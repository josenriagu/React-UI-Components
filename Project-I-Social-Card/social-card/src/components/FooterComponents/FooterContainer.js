import React from 'react';
import './Footer.css';
import FooterIcon from './FooterIcon';

const FooterContainer = () => {
    return (
        <div className='footer-container'>
            <FooterIcon src='assets/icons/chat.png' count='' />
            <FooterIcon src='assets/icons/retw.png' count='6' />
            <FooterIcon src='assets/icons/like.png' count='4' />
            <FooterIcon src='assets/icons/mail.png' count='' />
        </div>
    );
}

export default FooterContainer;