import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const Task = (props) => {
  const handleDeleteTask = () => {
     props.deleteTask(props.indexTask);
  };

  return (
    <div>
        {/* <span> 
         onClick={handleDeleteTask}
         className="glyphicon glyphicon-trash pull-right"></span> */}
     
      <p onClick={handleDeleteTask}>{props.taskData.projectName}</p>
    </div>
  )
}

export default Task