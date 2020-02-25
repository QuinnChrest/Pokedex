import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from "./Pages/Home/home";
import Detail from "./Pages/Detail/detail";

ReactDOM.render(            
    <Router>
        <Route path="/home" component={Home}/>
        <Route path="/pokemon/:pokedexNumber" component={Detail}/>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
