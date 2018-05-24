import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Comment {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }
  render() {
    return this.getBody();
  }
  getBody = () => {
    const {comments} = this.props;
    const {isOpen} = this.state;
    
    if (!comments || comments.length == 0) {
      return <div>No comments yet</div>
    }
    return (
      <div>
        <button onClick={this.toggleOpen}>{this.getButtonDescription()}</button>
        <ul>{this.state.isOpen ? comments.map((comment) => <li key={comment.id}><Comment comment={comment} /></li>) : null}</ul>
      </div>
    );
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  getButtonDescription = () => {
    return this.state.isOpen ? "Hide comments" : "Show comments";
  }
}