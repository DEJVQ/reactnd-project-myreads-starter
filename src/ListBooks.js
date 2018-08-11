import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import ChangeShelf from "./ChangeShelf"
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
    
    static propTypes = {
        booksCurrentlyReading: PropTypes.array.isRequired,
        booksWantToRead: PropTypes.array.isRequired,
        booksRead: PropTypes.array.isRequired
    }
    
    state = {
        bookId: "",
        shelfDestination: "",
        books: ""
    }
    
      setChangeValue = (event) => {
          this.state.shelfDestination = event;
          
          BooksAPI.update(this.state.bookId, this.state.shelfDestination).then((books) => {
              this.setState({books})
//              console.log(this.state.books);
          })
      }

      handleClick = (id) => {
            this.state.bookId = id;
      }
    
    render() {
        const { booksCurrentlyReading, booksWantToRead, booksRead, onUpdateStates} = this.props;
        const { books } = this.state;
        
        let showingCurrentyReadingBooks, showingWantToReadBooks, showingReadBooks;
        
        showingCurrentyReadingBooks = booksCurrentlyReading;
        showingWantToReadBooks = booksWantToRead;            
        showingReadBooks = booksRead;
        
        
        
        return (
            <div className="list-books" onChange={() => onUpdateStates()}>
               {/*{showingContacts.map((contact) => ())} */}
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
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer" id={`${book.id}`} onClick={() => this.handleClick(book.id)}>
                                  <ChangeShelf onChangeValue={this.setChangeValue} />
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.authors}</div>
                            </div>
                          </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Want to Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        {showingWantToReadBooks.map((book) => (
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer" id={`${book.id}`} onClick={() => this.handleClick(book.id)}>
                                  <ChangeShelf onChangeValue={this.setChangeValue} />
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.authors}</div>
                            </div>
                          </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        {showingReadBooks.map((book) => (
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer" id={`${book.id}`} onClick={() => this.handleClick(book.id)}>
                                  <ChangeShelf onChangeValue={this.setChangeValue} />
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.authors}</div>
                            </div>
                          </li>
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