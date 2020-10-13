import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import NavBar from './components/Navbar';
import Cart from './Cart';

import StoreItems from './ShopItems';

const Routes = () => {
    const [storeItems, setStoreItems] = useState(StoreItems);
    const [totalItems, setTotalItems] = useState(0);
    
    return (
        <BrowserRouter>
            <div>
                <NavBar items={totalItems} />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Store' render={(props) => (< Store storeItems={storeItems} setTotalItems={setTotalItems}/>)} />
                    <Route exact path='/Cart' render={(props) => (< Cart cartItems={storeItems} />) } />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default Routes;