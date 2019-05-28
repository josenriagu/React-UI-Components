import React from 'react';
import './Card.css';

const cardcontent = {
    h3: "Get started with React",
    parag1: "React makes it painless to create interactive UIs. design simple views for each state in your application.",
    link: "reactjs.org"
}

const CardContent = () => {
    return (
        <div className='card-content'>
            <h3>{cardcontent.h3}</h3>
            <p>{cardcontent.parag1}</p>
            <span>{cardcontent.link}</span>
        </div>
    );
}

export default CardContent;