import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import NavBar from './components/Navbar';

import StoreItems from './ShopItems';

const Routes = () => {
    const [storeItems, setStoreItems] = useState(StoreItems);
    const [cartItems, setCartItems] = useState([]);
    
    return (
        <BrowserRouter>
            <div>
                <NavBar items={cartItems} />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Store' render={(props) => (< Store storeItems={storeItems} />)} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default Routes;