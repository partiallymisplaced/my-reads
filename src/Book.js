import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Books } from './Books';

class Book extends Component {
  render() {
    return (
      <div>
        <div className="book">
          <div className="book-top">
              <img className="book-cover" src={this.props.book.imageLinks.thumbnail} alt=""/>
              <div className="book-shelf-changer">
                <select>
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

export default Book;
