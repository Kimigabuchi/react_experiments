import React from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'

class CommentList extends Comment {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })),
    isOpen: PropTypes.bool,
  };

  static defaultProps = {
    comments: []
  };

  render() {
    return this.getBody()
  }
  getBody = () => {
    const {comments, isOpen, toggleOpen} = this.props
    if (comments.length === 0) {
      return <div>No comments yet</div>
    }
    return (
      <div>
        <CommentForm />
        <button onClick={toggleOpen}>
          {this.getButtonDescription(isOpen)}
        </button>
        <ul>{isOpen ? comments.map((comment) => <li key={comment.id}><Comment comment={comment} /></li>) : null}</ul>
      </div>
    );
  }
  getButtonDescription = (isOpen) => {
    return isOpen ? "Hide comments" : "Show comments"
  }
}

export default toggleOpen(CommentList)