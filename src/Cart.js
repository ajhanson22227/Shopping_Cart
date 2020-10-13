import React from 'react';
import './styles/cart.css';


const Cart = (props) => {
    const total = props.cartItems.reduce( (prev, curr) => {
        return prev + curr.count
    }, 0)

    const itemList = props.cartItems.map((item) => {
        return (
            <div>
                <li key={item.id}>{item.name} : {item.count}</li>
            </div>
        );
    })

    return (
        <div className='cart-container'>
            {total === 0 ? <div>Your Cart is Empty</div> : <div>{itemList}</div>}
            
        </div>
        
    )
};

export default Cart;