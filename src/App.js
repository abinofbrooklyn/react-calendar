import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar';
import DayNames from './components/DayNames';
import moment from 'moment';

class App extends Component {
  state = {
    currentMoment: moment()
  }

  handleBackClick = () => {
    this.setState({ currentMoment: this.state.currentMoment.subtract(1, 'month') })
  };

  handleForwardClick = () => {
    this.setState({ currentMoment: this.state.currentMoment.add(1, 'month') })
  };

  goToTodayClick = () => {
    this.setState({ currentMoment: moment() })
  }

  render() {
    return (
      <div className="App">
        <Header moment={this.state.currentMoment}
                onBackClick={this.handleBackClick}
                onForwardClick={this.handleForwardClick}
                onTodayClick={this.goToTodayClick} />
        <DayNames />
        <Calendar moment={this.state.currentMoment} />
      </div>
    );
  }
}

export default App;
