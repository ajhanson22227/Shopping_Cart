import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = (props) => {

    return (
        <div className='nav-bar'>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Store'>Store</Link>
                </li>
            </ul>
            <Link to='/Cart'><h3 className="nav-cart">{props.items} items in the cart</h3></Link>
            
        </div>
    )
}

export default NavBar;