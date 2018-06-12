import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import Home from './home';
import Landing from './landing';
export default () => 
(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} />
    </Switch>    
    </BrowserRouter>
)