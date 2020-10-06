import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Store from './Store';
import NavBar from './components/Navbar'

const Routes = () => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <BrowserRouter>
            <div>
                <NavBar items={cartItems} />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Store' component={Store} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default Routes;