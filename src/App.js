import React from 'react'
import { Route } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import ListBooks from "./ListBooks"
import SearchBook from "./SearchBook"
import './App.css'

class BooksApp extends React.Component {
  state = {
      books: []
  }
  
  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState({ books });
      })
  }

    addBook(book) {
          BooksAPI.update(book).then(book => {
              this.setState(state => ({
                  books: state.books.concat([book])
              }))
          })
      }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks books={ this.state.books }/>
        )} />
        
        <Route path="/search" render={() => (
            <SearchBook />
        )} />
      </div>
    )
  }
}

export default BooksApp
