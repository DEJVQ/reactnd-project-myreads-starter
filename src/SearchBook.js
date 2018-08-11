import React, { Component } from "react"
import { Link } from "react-router-dom"
import escapeRegExp from "escape-string-regexp"
import * as BooksAPI from './BooksAPI'
import ChangeShelf from "./ChangeShelf"


class SearchBook extends Component {
    
  state = {
    query: '',
    booksSearched: [],
    bookId: "",
    shelfDestination: ""
  }
  

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if(query !== "") {
        BooksAPI.search(query).then((booksSearched) => {
            if(booksSearched.length > 1) {
                this.setState({ booksSearched });
            }
      })
    }
  }
  
  
  setChangeValue = (event) => {
      this.state.shelfDestination = event;
      
      BooksAPI.update(this.state.bookId, this.state.shelfDestination).then((books) => {
          this.setState({books})
          console.log({books});
      })
      
  }
  
  handleClick = (id) => {
        this.state.bookId = id;
  }
  
    
    render() {
        const { query, booksSearched } = this.state;
        const { onUpdateStates } = this.props;
        
        let showingBooks;
        
        if (query) {
            const match = new RegExp(escapeRegExp(query), "i");
            showingBooks = booksSearched.filter((book) => match.test(book.title));
        }
        else {
            showingBooks = [];
        }
        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                  <Link className="close-search" to="/">Close</Link>
                  <div className="search-books-input-wrapper">
                   <form action=""></form>
                    <input type="text" placeholder="Search by title or author" value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}/>
                  </div>
                </div>
                <div className="search-books-results" onChange={() => onUpdateStates()}>
                  <ol className="books-grid" >
                      {showingBooks.map((book) => (
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer" id={`${book.id}`} onClick={() => this.handleClick(book.id)} >
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
        )
    }
}

export default SearchBook