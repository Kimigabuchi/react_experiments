import React, {Component} from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    })
  }
  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {this.getButtonDescription(isOpen)}
        </button>
        {this.getBody()} 
      </div>
    )
  }
  getBody = () => {
    const {article, isOpen} = this.props;
    return isOpen ? <section>{article.text}<CommentList comments={article.comments} /></section> : null;
  }
  getButtonDescription = (isOpen) => {
    return isOpen ? "close" : "open";
  }
}

export default Article;