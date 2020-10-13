import React, {useState} from 'react';
import '../styles/itemcard.css';

const ItemCard = (props) => {
    const [item, setItem] = useState(props.item);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
       count > 0 && setCount(prevCount => prevCount - 1)
    }

    const addToCart = () => {
        item.count += count
        props.setTotalItem(prevCnt => prevCnt += count)
        setCount(prevCount => prevCount = 0)
    }
    
    return (
        <div className='item-card-container'>
            <div className='item-card-image'>
                <img src={item.photoURL} alt={item.photoAlt} />
            </div>
            <div className='item-card-name'>
                {item.name}
            </div>
            <div className='item-incrementer'>
                <span onClick={decrement}>MINUS</span>
                <span style={{"margin":"0 1em"}}>{count}</span>
                <span onClick={increment}>PLUS</span>
            </div>
            {count > 0 && <div className='add-cart-button' onClick={addToCart}>Add to Cart</div> }
        </div>
    );
};

export default ItemCard;