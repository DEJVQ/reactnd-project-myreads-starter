import React, { Component } from "react"

class ChangeShelf extends Component {
    
    render() {
        
        const { onChangeValue, bookId, selectValue, onHandleChange, defaultDisabled} = this.props;

        return (
            <select onChange={(e) => {onChangeValue(e.target), onHandleChange(e)}} id={bookId} value={selectValue}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" disabled={selectValue === "currentlyReading"}>Currently Reading</option>
                <option value="wantToRead" disabled={selectValue === "wantToRead"}>Want to Read</option>
                <option value="read" disabled={selectValue === "read"}>Read</option>
                <option value="none" disabled={selectValue === "none"}>None</option>
            </select>
        )
    }
}

export default ChangeShelf