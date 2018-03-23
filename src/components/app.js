import React, { Component } from 'react';
import BookDetail from '../containers/book_detail'
import {Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        {/*<div className="col-sm-8"></div>*/}
          <Route path="/" component={BookDetail}/>
          <Route path="/category" component={Category}/>
          <Route path="/products" component={Products}/>
        {/*<BookDetail/>*/}
      </div>
    );
  }
}
