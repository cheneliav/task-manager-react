import React, { Component } from 'react'
import Task from './Task'

export class TaskList extends Component {

  render() {
    return (
        // <div className="column-list-container row">
        //   <br />
        //   {this.props.tasks}
        // </div>

      <div className="Task-list">
        {this.props.tasks.map((task, i) =>
          <Task indexTask={i}
                taskData={task}
                deleteTask={this.props.deleteTask}/>
        )}
      </div>
    // <div className="Task-list">
    
        
    // </div>
    )
  }
}

export default TaskList;