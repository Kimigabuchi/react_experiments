import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Comment {
  static defaultProps = {
    comments: []
  };
  render() {
    return this.getBody();
  }
  getBody = () => {
    const {comments, isOpen, toggleOpen} = this.props;    
    if (comments.length == 0) {
      return <div>No comments yet</div>
    }
    return (
      <div>
        <button onClick={toggleOpen}>
          {this.getButtonDescription(isOpen)}
        </button>
        <ul>{isOpen ? comments.map((comment) => <li key={comment.id}><Comment comment={comment} /></li>) : null}</ul>
      </div>
    );
  }
  getButtonDescription = (isOpen) => {
    return isOpen ? "Hide comments" : "Show comments";
  }
}

export default toggleOpen(CommentList);