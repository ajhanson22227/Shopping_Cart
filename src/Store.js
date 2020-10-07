import React from 'react';
import ItemCard from './components/ItemCard';

const Store = (props) => {


    const listy = props.storeItems.map( (item) => {
        return < ItemCard item={item} key={item.id} />
    })

    return (
        <div>
            <h1>Hello from Store</h1>
            <div className='item-container'>
                {listy}
            </div>
        </div>
    );
};

export default Store;