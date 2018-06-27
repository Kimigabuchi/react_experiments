import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    })
  };
  render() {
    const {comment} = this.props
    return (
      <div>
        <h3>{comment.user}</h3>
        {this.getBody()}
      </div>
    )
  }
  getBody = () => {
    const {comment} = this.props
    return <section>{comment.text}</section>
  }
}