import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Routers} from "./routers";
import List from "./components/list";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          {/*<Routers/>*/}
          {/*<Switch>*/}
              {/*<Route exact path='/' component={App}/>*/}
              {/*<Route path='/list' component={List}/>*/}
              {/*/!*<Route path='/schedule' component={Schedule}/>*!/*/}
          {/*</Switch>*/}

          <App/>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
