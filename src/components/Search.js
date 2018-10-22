import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class Search extends Component {
  state = {
    query: '',
    searchResults: [],
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    });
    this.getSearchResults(query);
  }

  getSearchResults = (query) => {
    if (query) {
      BooksAPI
      .search(query)
      .then((searchResults) => {
        if (searchResults.error) {
          this.setState({ searchResults: [] })
        } else {

          for (let searchResult of searchResults) {
            for (let book of this.props.books) {
              if (searchResult.id === book.id) {
                searchResult.shelf = book.shelf;
                console.log(searchResult)
              }
            }
            if (!searchResult.shelf) {
              searchResult.shelf = 'none';
            }
          } 

          this.setState({ searchResults });
        }
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
                  <Book
                    book={searchResult}
                    moveBook={this.props.moveBook}
                  />
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
