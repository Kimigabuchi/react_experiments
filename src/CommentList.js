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
    const commentElements = comments.map((comment) => <li key={comment.id}><Comment comment={comment} /></li>);
    
    if (commentElements.length == 0) {
      return <div>No comments yet</div>
    }
    // if (this.state.isOpen) {
    //   return <div><button onClick={this.toggleOpen}>{this.getButtonDescription()}</button><ul>{commentElements}</ul></div>;
    // } else {
    //   return <div><button onClick={this.toggleOpen}>{this.getButtonDescription()}</button></div>;
    // }
    return (
      <div>
        <button onClick={this.toggleOpen}>{this.getButtonDescription()}</button>
        <ul>{this.state.isOpen ? commentElements : null}</ul>
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


CommentList.defaultProps = {
  comments: [],
};