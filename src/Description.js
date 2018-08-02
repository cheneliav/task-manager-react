import React, { Component } from 'react';
import EditableLabel from 'react-inline-editing';
import './Description.css'

class Description extends Component {
    _handleFocus(text) {
        console.log('Focused with text: ' + text);
    }
   
    _handleFocusOut(text) {
        console.log('Left editor with text: ' + text);
    }
    render() {
        return (
            <EditableLabel text={this.props.info}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
            />
        );
    }
}

export default Description;