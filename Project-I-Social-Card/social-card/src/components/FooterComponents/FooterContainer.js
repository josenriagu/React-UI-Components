import React from 'react';
import './Footer.css';
import FooterIcon from './FooterIcon';

const FooterContainer = () => {
    return (
        <div className='footer-container'>
            <FooterIcon href='#' icon='far fa-comment fa-3x' count='' />
            <FooterIcon href='#' icon='fas fa-retweet fa-3x' count='6' />
            <FooterIcon href='#' icon='far fa-heart fa-3x' count='4' />
            <FooterIcon href='#' icon='far fa-envelope fa-3x' count='' />
        </div>
    );
}

export default FooterContainer;