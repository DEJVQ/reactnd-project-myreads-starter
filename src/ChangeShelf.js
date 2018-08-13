import React, { Component } from "react"

class ChangeShelf extends Component {

   // componentDidMount() {
   //     let select = document.getElementById(`this.props.bookId`);
   //
   //     console.log(this);
   //     console.log(select);
   // }
        
    render() {
        
        const { onChangeValue, onInit, shelf, bookId} = this.props;
        
//        console.log(shelf);
        console.log(bookId);
        
//        var select = document.getElementById(`${bookId} select option[value={${shelf}]`);
//         var select = document.querySelectorAll(`${bookId}`);
//        select.firstChild;
//         console.log(select);
        
        
        
        
//        select.options[event.selectedIndex].setAttribute("selected", "selected")
        
        
        return (
            <select onChange={(e) => {onChangeValue(e.target)}} id={bookId}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default ChangeShelf