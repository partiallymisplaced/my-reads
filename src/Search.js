import React, { Component } from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI';

import Book from './Book';

class Search extends Component {
  state = {
    query: '',
    searchResults: [],
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
      // const match = new RegExp(escapeRegExp(this.state.query), 'i')
      // searchResults = this.props.searchResults.filter(
      //   (searchResult) => match.test(searchResult.title)
      // )
    });
    this.getSearchResults(query);
  }

  getSearchResults = (query) => {
  if (query) {
    BooksAPI
    .search(query)
    .then((searchResults) => {
      this.setState({ searchResults });
    })
  } else {
    this.setState({ searchResults: [] })
  }

  }


  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className='books-grid'>
            {this.state.searchResults
              .map(searchResult => (
                <li key={searchResult.id}>
                  <Book book={searchResult}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )

  }
}

export default Search;
