import {SELECT_ARTICLE} from '../constants'

export default (selected = [], action) => {
  const {type} = action

  switch(type) {
    case SELECT_ARTICLE: return action.payload.selected
    default: return selected
  }
}