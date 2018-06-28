import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import DateInterval from '../Filters/DateInterval'

import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component {
  static propTypes = {
    articles: PropTypes.array,
  }
  state = {
    selection: null
  }
  render() {
    const {articles} = this.props
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }))
    return (
      <div>
        <UserForm />
        <DateInterval />
        <Select options={options} value={this.state.selection} onChange={this.changeSelection} multi={true} />
        <ArticleList articles = {articles} defaultOpenID={articles[0].id} />
      </div>
    )
  }
  changeSelection = selection => this.setState({selection})
}

export default App;