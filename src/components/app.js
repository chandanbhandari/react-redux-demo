import React, { Component } from 'react';
import BookList from "../containers/book_list"
import BookDetail from '../containers/book_detail'

export default class App extends Component {
  render() {
    return (
      <div>
        {/*<div className="col-sm-8"></div>*/}
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}
