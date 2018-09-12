import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateInterval from './DateInterval'
import SelectFilter from './Select'

class Filters extends Component {
  static propTypes = {
    articles: PropTypes.array
  };

  render() {
    return (
      <div>
        <SelectFilter />
        <DateInterval />
      </div>
    )
  }
}

export default Filters