import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home/home";
import Detail from "./Pages/Detail/detail";

ReactDOM.render(            
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/Pokedex/home" component={Home}/>
            <Route path="/Pokedex/search/:search" component={Home}/>
            <Route path="/Pokedex/pokemon/:id" component={Detail}/>
            <Redirect from="*" to="/Pokedex/home"/>
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
