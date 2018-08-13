import React, { Component } from "react"
import { Link } from "react-router-dom"
import escapeRegExp from "escape-string-regexp"
import * as BooksAPI from './BooksAPI'
import Book from "./Book"


class SearchBook extends Component {
    
  state = {
      query: '',
      booksSearched: [],
      books: "",
      booksResult: []
  };

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
    if(query !== "") {
            BooksAPI.search(query).then((booksSearched) => {
                if (booksSearched.length > 1) {
                    this.setState({booksSearched});
                }
            });

            //  Test
            this.setState((state) => ({
              bookResult: this.props.booksWantToRead
            }))
        }
      };

    setSelect = () => {      
//        var select = document.getElementsByTagName("select");
//        
//        if(select.length > 0) {
//            var booksToRead = this.props.booksWantToRead;
//            for(let i=0, j=0; i < select.length, j < booksToRead.length; i++, j++) {
////                console.log(select[i].getAttribute("id"));
//                var selectId = select[i].getAttribute("id");
//                
//                console.log(selectId + ":" + booksToRead[j].id);
//                    
//                if(selectId == booksToRead[j].id) {
//                    console.log("Testtstt")
//                }
//            }
//        }
//        select.forEach(function(value) {
//            console.log(value);
//        })
    }
      
    render() {
        const { query, booksSearched} = this.state;
        const { onUpdateStates, allBooks} = this.props;
        
        let showingBooks;
        let map = new Map,
            result;
        
        if (query) {
           // const match = new RegExp(escapeRegExp(query), "i");
           // showingBooks = booksSearched.filter((book) => match.test(book.title));
//            showingBooks = booksSearched;

            [booksSearched, allBooks].forEach(a =>
                a.forEach(o => map.set(o.id, Object.assign(map.get(o.id) || {}, o)))
            );
            result = [...map.values()];

            console.log(result);
        }
        else {
            result = [];
        }
        
        return (
            <div className="search-books" onChange={() => onUpdateStates()}>
                <div className="search-books-bar">
                  <Link className="close-search" to="/">Close</Link>
                  <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={query}
                    onChange={(event) => {this.updateQuery(event.target.value), this.setSelect()}}/>
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                     {result.map((book) => (
                      <Book key={book.id} book={book} />
                    ))}
                  </ol>
                </div>
          </div>
        )
    }
}

export default SearchBook