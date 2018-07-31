import React, { Component } from 'react';
import ColumnList from './ColumnList';
import Column from './Column';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './TaskManager.css';
import 'font-awesome/css/font-awesome.min.css';


class TaskManager extends Component {
    constructor(props) {
        super(props);
        this.state = { columns: [] };
    }
    addColumn = () => {
        this.setState( {columns: this.state.columns.concat(<Column/>)});
    }
    render() {
        return (
            <div className="task-manager-container container-fluid">
                <div className="add-col-btn row  text-right fixed-top ">
                    <i className="fa fa-plus-circle col-xs-2  offset-11 " aria-hidden="true" onClick={this.addColumn}></i>
                </div>
                <ColumnList columns={this.state.columns} />
            </div>
        );
    }
}

export default TaskManager;