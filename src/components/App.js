import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import DateInterval from './Filters/DateInterval'
import Counter from './Counter'

import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component {
  static propTypes = {
    articles: PropTypes.array,
  }
  render() {
    const {articles} = this.props
    return (
      <div>
        <Counter />
        <UserForm />
        <ArticleList />
      </div>
    )
  }
  
}

export default App;
// <DateInterval />
// <Select options={options} value={this.state.selection} onChange={this.changeSelection} multi={true} />
// changeSelection = selection => this.setState({selection})