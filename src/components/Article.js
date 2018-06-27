import React, {Component} from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group'
import './Article.css'

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }),
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
  }
  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div> 
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {this.getButtonDescription(isOpen)}
        </button>
        <CSSTransitionGroup
          transitionName="article"
          transitionAppear={true}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
          transitionAppearTimeout={500}
          component="div"
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    )
  }
  getBody = () => {
    const {article, isOpen} = this.props
    if (!isOpen) return null
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }
  getButtonDescription = (isOpen) => {
    return isOpen ? "close" : "open";
  }
}

export default Article;