import React, { Component } from 'react';
import ColumnList from './ColumnList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './TaskManager.css';
import 'font-awesome/css/font-awesome.min.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { reorder } from './common';


/* addColumnModal = () => {
    <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
  
      <Modal.Body>One fine body...</Modal.Body>
  
      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>;
 } */

class TaskManager extends Component {
    constructor(props) {
        super(props);
        this.state = { columns: [] };
        this.id = 1;
        this.taskId = 1;
    }
    addColumn = () => {
        this.setState({ columns: this.state.columns.concat({ columnTitle: "Title", id: this.id++, tasks: [] }) });
    }

    editColumn = (index, title) => {
        let arr = this.state.columns.splice(0);
        arr[index].columnTitle = title;
        this.setState({ columns: arr });
    }

    addTask = (index) => {
        let columns = this.state.columns.slice(0);
        columns[index].tasks.push({ projectName: "Project Name", id: this.taskId++ });
        this.setState({ columns: columns });
    }


    deleteTask = (columnIndex) => {
        return ((taskIndex) => {
            let columns = this.state.columns.slice(0);
            columns[columnIndex].tasks = columns[columnIndex].tasks.filter((task, i) => i !== taskIndex);
            this.setState({ columns: columns });
        });

    }

    editTask = (columnIndex) => {
        return ((taskIndex) => {
            return ((task) => {
                let columns = this.state.columns.slice(0);
                columns[columnIndex].tasks[taskIndex] = task;
                this.setState({ columns: columns });
            }
            );
        });

    }


    onDragEnd = (result) => {
        // dropped outside the list

        if (!result.destination) {
            return;
        }

        if (result.type === "COLUMN") {

            const columns = reorder(
                this.state.columns,
                result.source.index,
                result.destination.index
            );

            this.setState({
                columns: columns,
            });
        }

        else if (result.type === "TASK") {
            if (result.destination.droppableId === result.source.droppableId &&
                result.destination.index === result.source.index) {
                return;
            }

            const start = this.state.columns[Number(result.source.droppableId)];
            const finish = this.state.columns[Number(result.destination.droppableId)];

            if (start === finish) {
                const newTasks = Array.from(start.tasks);
                let myTask = newTasks.splice(result.source.index, 1);
                newTasks.splice(result.destination.index, 0, myTask[0]);

                const newColumn = {
                    ...start,
                    tasks: newTasks
                };

                let newColumns = Array.from(this.state.columns);
                newColumns[Number(result.source.droppableId)] = newColumn;

                this.setState({ columns: newColumns });
                return;
            }

            //moving from one column to another
            const startTasks = Array.from(start.tasks);
            let myTask = startTasks.splice(result.source.index, 1);
            const newStart = {
                ...start,
                tasks: startTasks
            }

            const finishTasks = Array.from(finish.tasks);
            finishTasks.splice(result.destination.index, 0, myTask[0]);
            const newFinish = {
                ...finish,
                tasks: finishTasks
            }

            let newColumns = Array.from(this.state.columns);
            newColumns[Number(result.source.droppableId)] = newStart;
            newColumns[Number(result.destination.droppableId)] = newFinish;


            this.setState({ columns: newColumns });

        }


    }



    render() {
        return (
            <div className="task-manager-container container-fluid">
                <div className="add-col-btn row  text-right fixed-top ">
                    <i className="fa fa-plus-circle col-xs-2  offset-11 " aria-hidden="true" onClick={this.addColumn}></i>
                </div>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <ColumnList columns={this.state.columns}
                     editColumn={this.editColumn} addTask={this.addTask}
                      deleteTask={this.deleteTask} 
                      editTask={this.editTask}/>
                </DragDropContext>
            </div>
        );
    }
}

export default TaskManager;
