import React, {Component} from 'react';

export default class Comment extends Component {
  render() {
    const {comment} = this.props;
    return (
      <div>
        <h3>{comment.user}</h3>
        {this.getBody()}
      </div>
    )
  }
  getBody = () => {
    const {comment} = this.props;
    return <section>{comment.text}</section>;
  }
  getButtonDescription = () => {
    return this.state.isOpen ? "close" : "open";
  }
}