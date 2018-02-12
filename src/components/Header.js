import React, { Component } from 'react';
import moment from 'moment';

class Header extends Component {
  handleBack = () => {
    this.props.onBackClick();
  }

  handleForward = () => {
    this.props.onForwardClick();
  }

  handleGoToToday = () => {
    this.props.onTodayClick();
  }

  render() {
    let time = moment(this.props.moment).format('MMMM YYYY');
    return (
      <div className="header-component">
        <button onClick={this.handleBack}> &lt; </button>
        <h3>{ time }</h3>
        <button onClick={this.handleForward}> &gt; </button>
        <button onClick={this.handleGoToToday}> Today </button>
      </div>
    )
  }
}

export default Header;
