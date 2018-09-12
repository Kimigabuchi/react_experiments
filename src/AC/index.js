import {DELETE_ARTICLE, INCREMENT, SELECT_ARTICLE, SET_DATE_RANGE} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: {id}
  }
}

export function setSelectArticles(selected) {
  return {
    type: SELECT_ARTICLE,
    payload: {selected}
  }
}

export function setDateRange(date) {
  return {
    type: SET_DATE_RANGE,
    payload: {date}
  }
}