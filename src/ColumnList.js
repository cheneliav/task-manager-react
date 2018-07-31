import React, { Component } from 'react';
import Column from './Column';
import './ColumnList.css'



class ColumnList extends Component {
    render() {
        return (
                <div className="column-list-container row">
                    <br />
                    {this.props.columns}
                </div>
        );
    }
}

export default ColumnList;