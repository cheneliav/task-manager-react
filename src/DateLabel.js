import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
 

class DateLabel extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
    );
  }
}


export default DateLabel;