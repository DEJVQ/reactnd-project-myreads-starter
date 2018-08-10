import React from 'react'
import { Route } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import ListBooks from "./ListBooks"
import SearchBook from "./SearchBook"
import './App.css'

class BooksApp extends React.Component {
  state = {
      books: [],
      booksSearched: []
  }
  
  componentDidMount() {
//      console.log(BooksAPI);
      BooksAPI.getAll().then((books) => {
          this.setState({ books });
      })
      
      console.log(this.state.query);
      BooksAPI.search("art").then((booksSearched) => {
          console.log(booksSearched);
          this.setState({ booksSearched });
      })
  }

//    addBook(book) {
//          BooksAPI.update(book).then(book => {
//              this.setState(state => ({
//                  books: state.books.concat([book])
//              }))
//          })
//      }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks books={ this.state.books }/>
        )} />
        
        <Route path="/search" render={() => (
            <SearchBook booksSearched={ this.state.booksSearched } query={this.state.query}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
