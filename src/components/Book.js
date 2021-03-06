import React, { Component } from 'react';

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
                <select
                  value={this.props.book.shelf}
                  onChange={(event) => this.props.moveBook(
                    this.props.book, event.target.value
                  )}
                >
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
