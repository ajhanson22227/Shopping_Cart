import React from 'react';
import '../styles/itemcard.css';

const ItemCard = (props) => {
    return (
        <div className='item-card-container'>
            <div className='item-card-image'>
                <img src={props.item.photoURL} alt={props.item.photoAlt} />
            </div>
            <div className='item-card-name'>
                {props.item.name}
            </div>
        </div>
    );
};

export default ItemCard;