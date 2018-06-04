import React, {Component} from 'react';
import Article from './Article';
import accordeonOpen from '../decorators/accordeon';

class ArticleList extends Component {
  render() {
    const {articles, openArticleID, accordeonOpen} = this.props;
    const articleElements = this.props.articles.map((article) =>  <li key={article.id}>
                                                                    <Article
                                                                      article={article}
                                                                      isOpen={article.id === openArticleID}
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