import React, { Component } from 'react';
import './Column.css';
import EditableLabel from 'react-inline-editing';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import TaskList from './TaskList'
import { findDOMNode } from 'react-dom';
import { Droppable } from 'react-beautiful-dnd';



class Column extends Component {
    constructor(props) {
        super(props);
        this.taskId = 1;
    
    }

    _handleFocusOut = (text) => {
        if (text === '' || text === ' ') {
            return;

        }
        
        this.props.editColumn(this.props.index, text);
    }

    

    render() {
        const { provided, innerRef } = this.props
        return (
            <div className="column rounded"
                {...provided.draggableProps}

                ref={innerRef}>
                <div {...provided.dragHandleProps}>
                    <EditableLabel text={this.props.column.columnTitle}
                        labelClassName='column-title'
                        inputClassName='myInputClass'
                        inputWidth='150px'
                        inputHeight='25px'
                        inputMaxLength={50}
                        labelFontWeight='bold'
                        inputFontWeight='bold'
                        onFocusOut={this._handleFocusOut}
                        
                    />
                </div>
                <div className="add-task-btn">
                    <i className="fa fa-plus  bg-transparent" aria-hidden="true" onClick={()=>this.props.addTask(this.props.index)}></i>
                </div>


                <Droppable droppableId={"" + this.props.index} type="TASK">
                    {(provided1) => {
                        return (
                            <TaskList
                                {...provided1.droppableProps}
                                innerRef={provided1.innerRef}
                                tasks={this.props.column.tasks} 
                                deleteTask={this.props.deleteTask}
                                editTask={this.props.editTask}
                               
                            >
                                {provided1.placeholder}
                            </TaskList>
                        )
                    }}

                </Droppable>



            </div>

        );
    }




}
export default Column;