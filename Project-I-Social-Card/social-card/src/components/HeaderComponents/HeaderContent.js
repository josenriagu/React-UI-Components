import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const headercontent = {
    parag1: "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!",
}

const HeaderContent = () => {
    return (
        <div className='header-content'>
            <HeaderTitle />
            <p>{headercontent.parag1}</p>
        </div>
    );
}

export default HeaderContent;