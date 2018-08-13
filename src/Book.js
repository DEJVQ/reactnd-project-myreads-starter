import React, { Component } from "react"
import ChangeShelf from "./ChangeShelf"
import * as BooksAPI from './BooksAPI'


class Book extends Component {
    
    state = {
        shelfDestination: "",
        bookId: "",
        bookShelf: ""
      };
    
    setChangeValue = (event) => {
      this.state.shelfDestination = event.value;
      
      BooksAPI.update(this.state.bookId, this.state.shelfDestination).then((books) => {
          this.setState({books})
      })
    };
    
    componentDidMount() {
        this.setState({
            bookShelf: this.props.book.shelf,
            bookId: this.props.book.id
        });

        console.log(this.props.book.shelf)

        let selectContainer = document.getElementById(this.props.book.id);
        let select = selectContainer.firstElementChild;

        for (let i = 0; i < select.length; i++){
            let option = select.options[i];

            if (option.value === this.props.book.shelf) {
                select.options[i].setAttribute("selected", "selected");
                select.options[i].setAttribute("disabled", "disabled");
            }
        }
    }
    
    handleClick = (id) => {
        this.setState({
            bookId: id
        })
    };
    
    render() {
        const { book } = this.props;

        if (book.imageLinks !== undefined) {
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
        else {
            return (
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193 }}></div>
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
}

export default Book