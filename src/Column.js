import React, { Component } from 'react';
import './Column.css';
import EditableLabel from 'react-inline-editing';
import { findDOMNode } from 'react-dom';



class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnTitle: 'Title'
        }
    }

    _handleFocusOut = (text) => {
        if (text === '' || text === ' ') {
            console.log("this.state.columnTitle = " + this.state.columnTitle);
            text = this.state.columnTitle;
            this.setState({ columnTitle: text });


        }
        else {
            this.setState({ columnTitle: text });
        }

        this.props.editColumn(this.props.index, text);
    }

    render() {
        const { provided, innerRef } = this.props
        return (
            <div className="column rounded"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={innerRef}>
                <EditableLabel text={this.state.columnTitle}
                    labelClassName='column-title'
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