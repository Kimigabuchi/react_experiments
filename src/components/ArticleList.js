import React, {Component} from 'react';
import Article from './Article';
import accordeonOpen from '../decorators/accordeon';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectArticles} from '../AC'

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    })),
    openItemID: PropTypes.string,
    accordeonOpen: PropTypes.func,
  }
  render() {
    const {articles, openItemID, accordeonOpen, selected, date} = this.props;
    const articleElements = articles
                              .filter(article => {
                                if (!selected) return article
                                if (selected.length === 0) return article
                                return !!selected.find(select => select.value === article.id)
                              })
                              .filter(article => {
                                const {to, from} = date
                                const current = new Date(article.date)
                                if (!to) return true
                                return current >= from && current <= to
                              })
                              .map((article) => <li key={article.id}>
                                                  <Article
                                                    article={article}
                                                    isOpen={article.id === openItemID}
                                                    toggleOpen={accordeonOpen(article.id)}
                                                  />
                                                </li>);
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }
}

export default connect(({articles, selected, date}) => ({articles, selected, date}))(accordeonOpen(ArticleList));