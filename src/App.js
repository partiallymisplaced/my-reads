import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';
import Books from './Books';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({books})
      })
  }

  render() {
    return (
      <div className="app">
      <Route exact
        path="/"
        render={ () => (
          <Books
            books={this.state.books}/>
      )}/>

      <Route
        path="/search"
        render={ ({ history }) => (
          <Search />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
