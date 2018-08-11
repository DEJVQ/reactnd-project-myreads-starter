import React, { Component } from "react"

class ChangeShelf extends Component {
    
    render() {
        
        const { onChangeValue } = this.props;
        
        return (
            <select onChange={(e) => onChangeValue(e.target.value)} >
                <option value="move" disabled>Move to...</option>
                <option value="" disabled></option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default ChangeShelf