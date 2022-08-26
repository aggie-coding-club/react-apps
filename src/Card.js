import React, { useState } from 'react';
import './Card.css';

function Card(props) {
    // props.image -> image file name
    // props.itemName -> item name shown in the card
    // props.owner -> item owner/seller
    // props.price -> price of item (float value)

    return (
        <div className='card-div'>
            <div className='image-div'>
                <img src={props.image} alt={props.itemName} width="200" height="200" />
            </div>
            <div className='description-div'>
                <h5 className='title'>{props.itemName}</h5>
                <p>{props.owner}</p>
                <p>${props.price}</p>
            </div>

        </div>
    );
}

export default Card;