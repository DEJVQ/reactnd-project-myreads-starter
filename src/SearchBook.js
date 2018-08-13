import React, { Component } from "react"
import { Link } from "react-router-dom"
import escapeRegExp from "escape-string-regexp"
import * as BooksAPI from './BooksAPI'
import Book from "./Book"


class SearchBook extends Component {
    
  state = {
      query: '',
      booksSearched: []
  };
  

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
    if(query !== "") {
        BooksAPI.search(query).then((booksSearched) => {
            if (booksSearched.length > 1) {
                this.setState({booksSearched});
            }
        })
    }
      };
      
    render() {
        const { query, booksSearched, bookShelf} = this.state;
        const { onUpdateStates } = this.props;
        
        let showingBooks;
        
        if (query) {
           // const match = new RegExp(escapeRegExp(query), "i");
           // showingBooks = booksSearched.filter((book) => match.test(book.title));
            showingBooks = booksSearched
        }
        else {
            showingBooks = [];
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                  <Link className="close-search" to="/">Close</Link>
                  <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}/>
                  </div>
                </div>
                <div className="search-books-results" onChange={() => onUpdateStates()}>
                  <ol className="books-grid">
                     {showingBooks.map((book) => (
                      <Book key={book.id} book={book} />
                    ))}
                  </ol>
                </div>
          </div>
        )
    }
}

export default SearchBook