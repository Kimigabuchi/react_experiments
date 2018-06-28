import React, {Component} from 'react'
import PropTypes from 'prop-types'

import DayPicker, {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import './DateInterval.css'

class DateInterval extends Component {
  static defaultProps = {
    numberOfMonths: 1,
  }
  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    }
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }

  render() {
    const {from, to} = this.state;
    const modifiers = {start: from, end: to};
    const selectedRange = from && to && `${from.toLocaleDateString()} - ${to.toLocaleDateString()}`
    return (
      <div className="RangeExample">
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, {from, to}]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <div>
          {!from && !to && 'Пожалуйста, выберите первый день'}
          {from && !to && 'Пожалуйста, выберите последний день'}
          {from && to && `Выбран интервал от ${from.toLocaleDateString()} до ${to.toLocaleDateString()}`}{' '}
          {from && to && (
            <button className="link" onClick={this.handleResetClick}>
              Reset
            </button>
          )}
        </div>
        <div>{selectedRange}</div>
      </div>
    )
  }
}

export default DateInterval;