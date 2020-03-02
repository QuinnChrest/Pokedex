import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home/home";
import Detail from "./Pages/Detail/detail";

ReactDOM.render(            
    <Router>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/search/:search" component={Home}/>
            <Route path="/pokemon/:id" component={Detail}/>
            <Redirect from="*" to="/home"/>
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
