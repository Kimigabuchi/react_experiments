import React, {Component as ReactComponent} from 'react';

export default (OriginalAccordeonComponent) => class WrappedAccordeonComponent extends ReactComponent {
  state = {
    openArticleID: null,
  }
  render() {
    return  <OriginalAccordeonComponent {...this.props} openArticleID={this.state.openArticleID} accordeonOpen={this.accordeonOpen} />
  }
  accordeonOpen = (openArticleID) => ev => {
    ev && ev.preventDefault && ev.preventDefault();
    let resultOpenArticleID = null;
    if (openArticleID !== this.state.openArticleID) {
      resultOpenArticleID = openArticleID
    }
    this.setState({ openArticleID: resultOpenArticleID })
  }
};