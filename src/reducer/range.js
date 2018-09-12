import {SET_DATE_RANGE} from '../constants'

export default (date = {from: null, to: null}, action) => {
  const {type} = action

  switch(type) {
    case SET_DATE_RANGE:
      const {from, to} = action.payload.date
      return {from, to}
      break
    default: return date
  }
}