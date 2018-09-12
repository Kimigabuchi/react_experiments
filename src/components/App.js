import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filter from './Filters'
import Counter from './Counter'

import 'react-select/dist/react-select.css'

class App extends Component {
  static propTypes = {
    articles: PropTypes.array,
  }
  changeSelection = selection => this.setState({selection})
  render() {
    return (
      <div>
        <Counter />
        <UserForm />
        <Filter />
        <ArticleList />
      </div>
    )
  }
  
}

export default App;