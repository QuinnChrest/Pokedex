import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import "./app.css";

import Home from "./Pages/Home/home";
import Detail from "./Pages/Detail/detail";

function App() {
    return (
        <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/pokemon/:id" component={Detail}/>
            <Redirect from="*" to="/"/>
        </Switch>
        </div>
    );
}

export default App;