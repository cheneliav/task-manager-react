import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EditableLabel from 'react-inline-editing';
import './ProjectName.css'

class ProjectName extends Component {
    
   
    render() {
        return (
                <EditableLabel text={this.props.name}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='80%'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocusOut={this.props._handleFocusOutProjectName}
                />
        
        );
    }
}

export default ProjectName;