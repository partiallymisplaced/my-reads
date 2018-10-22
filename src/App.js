import React from 'react';
import { Route } from 'react-router-dom';

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
      this.setState({books});
      console.log(this.state);
    });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
    })
  }

  render() {
    return (
      <div className="app">
      <Route exact
        path="/"
        render={ () => (
          <Books
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )}
      />

      <Route
        path="/search"
        render={ ({ history }) => (
          <Search
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )}
      />
      </div>
    )
  }
}

export default BooksApp;
