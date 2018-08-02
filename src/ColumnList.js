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
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided, snapshot) => (
                    <div className="column-list-container row"
                        ref={provided.innerRef}
                        style={this.getListStyle(snapshot.isDraggingOver)}
                        {...provided.droppableProps}
                    >
                        <br />



                        {this.props.columns.map((column, index) => (
                            <Draggable key={column.id} draggableId={column.id} index={index} >
                                {(provided, snapshot) => (
                                    <div>
                                        <Column
                                            index={index}
                                            column={column}
                                            editColumn={this.props.editColumn}
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
