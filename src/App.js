import React from 'react'
import { Route } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import ListBooks from "./ListBooks"
import SearchBook from "./SearchBook"
import './App.css'

class BooksApp extends React.Component {
  state = {
      booksCurrentlyReading: [],
      booksWantToRead: [],
      booksRead: [],
      indexSelected: 1
  };
  
  componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({
            booksCurrentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
            booksWantToRead: books.filter(book => book.shelf === 'wantToRead'),
            booksRead: books.filter(book => book.shelf === 'read')
        })
      });
  }

    renderBooks = () => {
        BooksAPI.getAll().then((books) => {
        this.setState({
            booksCurrentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
            booksWantToRead: books.filter(book => book.shelf === 'wantToRead'),
            booksRead: books.filter(book => book.shelf === 'read')
        })
      });   
    };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <ListBooks 
            booksCurrentlyReading={ this.state.booksCurrentlyReading }
            booksWantToRead={ this.state.booksWantToRead }
            booksRead={ this.state.booksRead }
            onUpdateStates={ this.renderBooks }
            />
        )} />
        
        <Route path="/search" render={() => (
            <SearchBook onUpdateStates={ this.renderBooks } />
        )} />
      </div>
    )
  }
}

export default BooksApp
