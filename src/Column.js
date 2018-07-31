import React, { Component } from 'react';
import './Column.css';
import EditableLabel from 'react-inline-editing';


class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnTitle: 'Title'
        }
    }   
    
    _handleFocusOut = (text) => {
        if(text == null || text === ' ')
            {this.setState({columnTitle: this.state.columnTitle})}
        else this.setState({ columnTitle: text});
    }

    render() {
        console.log(this.state);
        return (
            <div className="column rounded">
                <EditableLabel text={this.state.columnTitle}
                labelClassName='columnTitle'
                inputClassName='myInputClass'
                inputWidth='150px'
                inputHeight='25px'
                inputMaxLength={50}
                labelFontWeight='bold'
                inputFontWeight='bold'
                onFocusOut={this._handleFocusOut}
                
            />
         
                <div className="task-list">
                </div>
            </div>
        );
    }

}

export default Column;