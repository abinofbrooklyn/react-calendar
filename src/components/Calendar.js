import React, { Component } from 'react';
import moment from 'moment';

class Calendar extends Component {

  getDates() {

    let startDate = moment(this.props.moment).startOf('month').startOf('week');
    let lastDate = moment(this.props.moment).endOf('month').endOf('week');
    let weeks = [];
    let i;

    while (startDate.isSameOrBefore(lastDate)) {
      let days = [];
      for (i = 0; i <=6; i++) {
        days.push(moment(startDate).add(i, 'day'));
      }

      weeks.push(days);

      startDate.add(1, 'week');
    }

    return weeks;
  }

  renderWeeks(week) {
    let currentMoment = moment();

    return week.map( day => {
      return this.renderDays(day)
    })
  }

  renderDays(day) {
    let dayClassName = moment(this.props.moment).format('MM') === day.format('MM')
    ? 'current-month' : 'not-current-month';
    let isCurrentDay = moment().isSame(day, 'day')
    ? 'current-day' : '';
    return <div className={`day ${dayClassName} ${isCurrentDay}`}>{day.format('DD')}</div>
  }

  render() {
    return (
      <div>
        {this.getDates().map( week => {
          return <div className='week'>
            {this.renderWeeks(week)}
          </div>
        })}
      </div>
    );
  }
}

export default Calendar;
