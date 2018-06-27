import React, {Component as ReactComponent} from 'react';

export default (OriginalAccordeonComponent) => class WrappedAccordeonComponent extends ReactComponent {
  constructor(props) {
    super(props)
    this.state = {
      openItemID: props.defaultOpenID
    }
  }
  // state = {
    // openItemID: null,
  // }
  render() {
    return  <OriginalAccordeonComponent {...this.props} openItemID={this.state.openItemID} accordeonOpen={this.accordeonOpen} />
  }
  accordeonOpen = (openItemID) => ev => {
    ev && ev.preventDefault && ev.preventDefault()
    let resultOpenItemID = null;
    if (openItemID !== this.state.openItemID) {
      resultOpenItemID = openItemID
    }
    this.setState({ openItemID: resultOpenItemID })
  }
};