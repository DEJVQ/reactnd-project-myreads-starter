import React, { Component } from "react"

class ChangeShelf extends Component {
    
    checkText = () => {
        console.log("dsadadsa");
    }
    
    render() {
        
        const { onChangeValue, onChangeSelected } = this.props;
        
        return (
            <select onChange={(e) => {onChangeValue(e.target), onChangeSelected(e.target)}} >
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