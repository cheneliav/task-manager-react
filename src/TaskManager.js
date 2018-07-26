import React, { Component } from 'react';
import ColumnList from './ColumnList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class TaskManager extends Component {
    constructor(props){
        super(props);
        this.state= { columns:[]};
    }
    render() {
        return (
            <div className="task-manager-container">
                <button className="btn btn-default">Add Column</button>
                <ColumnList columns={this.state.columns}/>
            </div>
        );
    }
}

export default TaskManager;