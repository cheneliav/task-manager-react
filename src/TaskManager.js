import React, { Component } from 'react';
import ColumnList from './ColumnList';
import Column from './Column';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './TaskManager.css';
import 'font-awesome/css/font-awesome.min.css';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {reorder} from './common';


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
    }
    addColumn = () => {
        this.setState( {columns: this.state.columns.concat({columnTitle: "Title", id: this.id++})});
    }

    editColumn = (index, title) => {
        let arr = this.state.columns.splice(0);
        arr[index].columnTitle = title;
        this.setState({columns: arr});


    }

    onDragEnd = (result) => { 
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        const columns = reorder(
          this.state.columns,
          result.source.index,
          result.destination.index
        );
    
        this.setState({
          columns: columns,
        });
      }
    
   
    render() {
        return (
            <div className="task-manager-container container-fluid">
                <div className="add-col-btn row  text-right fixed-top ">
                    <i className="fa fa-plus-circle col-xs-2  offset-11 " aria-hidden="true" onClick={this.addColumn}></i>
                </div>
                <DragDropContext onDragEnd={this.onDragEnd}>
                <ColumnList columns={this.state.columns}  editColumn={this.editColumn} />
                </DragDropContext>
            </div>
        );
    }
}

export default TaskManager;
