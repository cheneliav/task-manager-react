import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EditableLabel from 'react-inline-editing';
import './Task.css';
import ProjectName from './ProjectName'
import PersonOnTheTask from './PersonOnTheTask'
import Description from './Description'
import DateLabel from './DateLabel'
import 'font-awesome/css/font-awesome.min.css';



class Task extends Component {
    constructor(props){
        super(props);
        this.tempProps = {projectName: "Project java",description:"implamenting network interface",assignedTo:"Kobi A",dateCreated: "02/08/2018",estimatedTime:"05/08/2018" }
        this._handleFocus = this._handleFocus.bind(this);
        this._handleFocusOut = this._handleFocusOut.bind(this);
    }
    handleDeleteTask = () => {
        this.props.deleteTask(this.props.indexTask);
     };
    _handleFocus(text) {
        console.log('Focused with text: ' + text);
    }
   
    _handleFocusOut(text) {
        console.log('Left editor with text: ' + text);
    }
    render() {
        return (
            <div className="card border-light mb-3" style={{maxWidth: "18rem", padding: "px"}}>
                <div className="card-header"> 
                    <ProjectName  name={this.props.taskData.projectName} /> 
                    <i className="fa fa-trash" style={{position: "absolute", top: "0.5rem", bottom: "0.5rem",
                        right: "0.5rem"}} onClick={this.handleDeleteTask}></i>

                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <PersonOnTheTask name={this.tempProps.assignedTo}/>
                    </h5>
                    <p className="card-text"><Description info={this.tempProps.description}/></p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{this.tempProps.dateCreated} untill {this.tempProps.estimatedTime} </small>
                </div>
            </div>);

        
    }
}

export default Task;


