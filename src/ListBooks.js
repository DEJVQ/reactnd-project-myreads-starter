import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Book from "./Book"

class ListBooks extends Component {
    
    static propTypes = {
        booksCurrentlyReading: PropTypes.array.isRequired,
        booksWantToRead: PropTypes.array.isRequired,
        booksRead: PropTypes.array.isRequired
    };
    
    state = {
        books: ""
    };
    
    
    render() {
        const { booksCurrentlyReading, booksWantToRead, booksRead, onUpdateStates} = this.props;

        let showingCurrentyReadingBooks, showingWantToReadBooks, showingReadBooks;
        
        showingCurrentyReadingBooks = booksCurrentlyReading;
        showingWantToReadBooks = booksWantToRead;            
        showingReadBooks = booksRead;
        
        
        
        return (
            <div className="list-books" onChange={() => onUpdateStates()}>
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Currently Reading</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                         {showingCurrentyReadingBooks.map((book) => (
                          <Book key={book.id} book={book} />
                          ))}
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Want to Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        {showingWantToReadBooks.map((book) => (
                          <Book key={book.id} book={book} />
                          ))}
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        {showingReadBooks.map((book) => (
                            <Book key={book.id} book={book} />
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
        )
    }
}

export default ListBooks