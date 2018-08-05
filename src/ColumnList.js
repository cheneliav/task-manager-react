import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import Column from './Column';
import './ColumnList.css';



class ColumnList extends Component {

    getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'grey',
        // styles we need to apply on draggables
        ...draggableStyle,
    });

    getListStyle = isDraggingOver => ({
        /* background: isDraggingOver ? 'lightblue' : 'lightgrey', */

    });

    render() {
        return (
            // add type
            <Droppable droppableId="droppable" direction="horizontal" type="COLUMN"> 
                {(provided, snapshot) => (
                    <div className="column-list-container row"
                        ref={provided.innerRef}
                        style={this.getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                    >
                        <br />



                        {this.props.columns.map((column, index) => (
                            <Draggable key={column.id} draggableId={"column_" + column.id} index={index} type="COLUMN" >
                                {(provided, snapshot) => (
                                    <div>
                                        <Column
                                            index={index}
                                            column={column}
                                            editColumn={this.props.editColumn}
                                            addTask={this.props.addTask}
                                            deleteTask={()=>this.props.deleteTask(index)}
                                            editTask={this.props.editTask(index)}
                                            innerRef={provided.innerRef}
                                            provided={provided}
                                            style={this.getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                            )}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>



        );
    }

}

export default ColumnList;
