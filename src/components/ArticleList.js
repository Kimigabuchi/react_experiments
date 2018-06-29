import React, {Component} from 'react';
import Article from '../Article';
import accordeonOpen from '../decorators/accordeon';
import PropTypes from 'prop-types';

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
    const {articles, openItemID, accordeonOpen} = this.props;
    const articleElements = articles.map((article) =>  <li key={article.id}>
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

export default accordeonOpen(ArticleList);