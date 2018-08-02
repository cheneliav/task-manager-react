import React, { Component } from 'react';
import './Column.css';
import EditableLabel from 'react-inline-editing';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import TaskList from './TaskList'
import { findDOMNode } from 'react-dom';



class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnTitle: 'Title',
            tasks : []
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

    addTask = () => {

        this.setState( {tasks: this.state.tasks.concat({ projectName: "Project Name"})});
    }

    deleteTask = (index) => {
        this.setState( {tasks: this.state.tasks.filter((task, i) => i !== index)});
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
                <div className="add-task-btn">
                     <i className="fa fa-plus  bg-transparent" aria-hidden="true" onClick={this.addTask}></i> 
                </div> 

                 <div className="task-list">
                   <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
                </div>


            </div>

        );
    }




}
export default Column;