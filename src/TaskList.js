import React, { Component } from 'react'
import Task from './Task';
import { Draggable } from 'react-beautiful-dnd';
import './TaskList.css'

export class TaskList extends Component {

    render() {
        const { innerRef } = this.props;
        return (
            // <div className="column-list-container row">
            //   <br />
            //   {this.props.tasks}
            // </div>
            
            <div className="task-list"
                ref={innerRef}>
                
                {this.props.tasks.map((task, i) =>
                    <Draggable draggableId={"" + task.id} index={i} type="TASK">
                        {(provided) => (
                            <Task indexTask={i}
                                taskData={task}
                                deleteTask={()=>this.props.deleteTask()(i)}
                                editTask={this.props.editTask(i)}
                                provided={provided}
                                innerRef={provided.innerRef}
                            />
                        )}

                    </Draggable>
                )}
            </div>
            // <div className="Task-list">


            // </div>
        )
    }
}

export default TaskList;