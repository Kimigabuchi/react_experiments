import React, {Component} from 'react';
import CommentList from './CommentList';

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }    
  }
  render() {
    const {article} = this.props;
    const {isOpen} = this.state;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>{this.getButtonDescription()}</button>
        {this.getBody()} 
      </div>
    )
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  getBody = () => {
    const {article} = this.props;
    return this.state.isOpen ? <section>{article.text}<CommentList comments={article.comments} /></section> : null;
  }
  getButtonDescription = () => {
    return this.state.isOpen ? "close" : "open";
  }
}