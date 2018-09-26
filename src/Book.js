import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Books } from './Books';

class Book extends Component {
  state = {
    shelf: ''
  }

  handleChange = (event) => {
    this.setState({shelf: event.target.value})
  }

  render() {
    return (
      <div>
        <div className="book">
          <div className="book-top">
              <img className="book-cover"
                src= {this.props.book.imageLinks ?
                  this.props.book.imageLinks.thumbnail :
                  ''}
                alt=""/>
              <div className="book-shelf-changer">
                <select value={this.state.shelf}
                  onChange={this.handleChange}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </div>
    );
  }
}

Book.PropTypes = {
  book: PropTypes.object
}

export default Book;
