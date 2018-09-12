import React, {Component} from 'react'

import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import './DateInterval.css'

import {connect} from 'react-redux'
import {setDateRange} from '../../AC'

class DateInterval extends Component {
  handleDayClick = (day) => {
    const {setDateRange, date} = this.props
    setDateRange(DateUtils.addDayToRange(day, date))
  }
  handleResetClick = () => {
    const {setDateRange} = this.props
    setDateRange(DateUtils.addDayToRange(null, {from: null, to: null}))
  }

  render() {
    const {from, to} = this.props.date;
    const selectedRange = from && to && `${from.toLocaleDateString()} - ${to.toLocaleDateString()}`
    return (
      <div className="RangeExample">
        <DayPicker
          className="Selectable"
          selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        <div>
          {!from && !to && 'Пожалуйста, выберите первый день'}
          {from && !to && 'Пожалуйста, выберите последний день'}
          {from && to && `Выбран интервал от ${from.toLocaleDateString()} до ${to.toLocaleDateString()}`}{' '}
          {from && to && (
            <button className="link" onClick={this.handleResetClick.bind(this)}>
              Reset
            </button>
          )}
        </div>
        <div>{selectedRange}</div>
      </div>
    )
  }
}

export default connect((state) => ({date: state.date}), {setDateRange})(DateInterval);