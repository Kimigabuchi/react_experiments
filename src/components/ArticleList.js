import React, {Component} from 'react';
import Article from './Article';

class ArticleList extends Component {
  state = {
    openArticleID: null,
  }
  render() {
    const articleElements = this.props.articles.map((article) =>  <li key={article.id}>
                                                                    <Article
                                                                      article={article}
                                                                      isOpen={article.id === this.state.openArticleID}
                                                                      toggleOpen = {this.toggleOpenArticle(article.id)}
                                                                    />
                                                                  </li>);
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }
  toggleOpenArticle = openArticleID => ev => {
    this.setState({ openArticleID })
  }
}
export default ArticleList;