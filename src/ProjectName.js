import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EditableLabel from 'react-inline-editing';
import './ProjectName.css'

class ProjectName extends Component {
    
    _handleFocus(text) {
        console.log('Focused with text: ' + text);
    }
   
    _handleFocusOut(text) {
        console.log('Left editor with text: ' + text);
    }
    render() {
        return (
                <EditableLabel text={this.props.name}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='80%'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='500'
                    inputFontWeight='normal'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
        
        );
    }
}

export default ProjectName;