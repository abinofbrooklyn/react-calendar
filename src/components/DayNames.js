import React from 'react';
import moment from 'moment';

class DayNames extends React.Component {
  render() {


    return (
      <div className='day-names'>
        { [0,1,2,3,4,5,6].map( dayIndex => {
          return <div>{moment().day(dayIndex).format('dddd')}</div>
        })}
      </div>
    )
  }
}

export default DayNames;
