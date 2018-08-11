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
      booksRead: []
  }
  
  componentDidMount() {
      
      BooksAPI.getAll().then((books) => {
          let currentlyReading = [...books].filter(book => {
                if (book.shelf === "currentlyReading" ) {
                    return book;
                }
          });
          
          this.setState({booksCurrentlyReading: currentlyReading});
      });
      
      
      BooksAPI.getAll().then((books) => {
          let wantToRead = [...books].filter(book => {
                if (book.shelf === "wantToRead" ) {
                    return book;
                }
          });
          
          this.setState({booksWantToRead: wantToRead});
      });
      
      
      BooksAPI.getAll().then((books) => {
          let read = [...books].filter(book => {
                if (book.shelf === "read" ) {
                    return book;
                }
          });
          
          this.setState({booksRead: read});
      });
  }

    renderBooks = () => {
        this.forceUpdate()
        BooksAPI.getAll().then((books) => {
          let currentlyReading = [...books].filter(book => {
                if (book.shelf === "currentlyReading" ) {
                    return book;
                }
          });
          
          this.setState({booksCurrentlyReading: currentlyReading});
      });
      
      
      BooksAPI.getAll().then((books) => {
          let wantToRead = [...books].filter(book => {
                if (book.shelf === "wantToRead" ) {
                    return book;
                }
          });
          
          this.setState({booksWantToRead: wantToRead});
      });
        
        BooksAPI.getAll().then((books) => {
          let read = [...books].filter(book => {
                if (book.shelf === "read" ) {
                    return book;
                }
          });
          
          this.setState({booksRead: read});
      });
        
        
    }

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
