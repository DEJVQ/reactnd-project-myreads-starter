import React, { Component } from "react"
import ChangeShelf from "./ChangeShelf"
import * as BooksAPI from './BooksAPI'


class Book extends Component {
    
    state = {
        shelfDestination: "",
        bookId: "",
        bookShelf: ""
      }
    
    setChangeValue = (event) => {
      this.state.shelfDestination = event.value;
      
      BooksAPI.update(this.state.bookId, this.state.shelfDestination).then((books) => {
          this.setState({books})
      })
    }
    
    componentDidMount() {
        this.setState({
            bookShelf: this.props.book.shelf,
            bookId: this.props.book.id
        })
  }
    
    changeSelected = (event) => {
        
        var elementClosest = document.querySelector(".test");
//        console.log(this.props.book.shelf);
//        console.log(this)
        
//        console.log(event)
//        event.options[event.selectedIndex].setAttribute("selected", "selected")
//        this.setState({
//           bookShelf:  
//        });
    }
    
    
    handleClick = (id) => {
        this.setState({
            bookId: id
        })
  }
    updateQuery = (event) => {
        console.log("dsad");
    }
    
    render() {
        const { book, onSetId } = this.props;
        
//        var select = document.getElementById(`${bookId} select option[value={${shelf}]`);
        
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className={`book-shelf-changer ${book.shelf}`} id={`${book.id}`} onClick={() => this.handleClick(book.id)}>
                            <ChangeShelf onChangeValue={this.setChangeValue} shelf={this.state.bookShelf} bookId={this.state.bookId} />
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book