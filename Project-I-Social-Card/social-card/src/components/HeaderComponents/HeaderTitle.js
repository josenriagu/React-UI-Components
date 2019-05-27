import React from 'react';
import './Header.css';

const title = {
    h3: "Lambda School",
    handle: "@LambdaSchool",
    separator : ".",
    date: "26 Jan"
}

const HeaderTitle = () => {
    return(
        <div className='header-title'>
            <h3>{title.h3}</h3>
            <span>{title.handle}</span>
            <span>{title.separator}</span>
            <span>{title.date}</span>
        </div>
    );
}

export default HeaderTitle;