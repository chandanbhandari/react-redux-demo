import { Switch, Route } from 'react-router-dom'
import App from "./components/app";
import React from 'react'
import List from "./components/list";

export const Routers = () => (
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/list' component={List}/>
            {/*<Route path='/schedule' component={Schedule}/>*/}
        </Switch>
)