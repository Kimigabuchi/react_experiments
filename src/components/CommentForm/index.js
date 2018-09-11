import React, {Component} from 'react'
import './style.css'

class CommentForm extends Component {
  state = {
    user: "",
    text: ""
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name: <input
          type="text"
          className={this.getClassName("user")}
          value={this.state.user}
          onChange={this.handleChange("user")}
        />
        <div>{this.state.user}</div>
        Comment: <textarea
          type="text"
          className={this.getClassName("text")}
          value={this.state.text}
          onChange={this.handleChange("text")}
        />
        <div>{this.state.text}</div>
        <input type="submit" value="submit" />
      </form>
    )
  }
  getClassName = type => {
    let resultClass = ""
    if (this.state[type].length && this.state[type].length < limits[type].min) {
      resultClass = "form-input__error"
    }
    return resultClass
  }
  handleChange = type => (ev) => {
    const {value} = ev.target
    if (value.length > limits[type].max) return
    this.setState({
      [type]: ev.target.value,
    })
  }
  handleCommentChange = (ev) => {
    this.setState({
      text: ev.target.value,
    })
  }
  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({
      user: "",
      text: ""
    })
  }
}

const limits = {
  user: {
    min: 5,
    max: 15,
  },
  text: {
    min: 20,
    max: 50,
  }
}

export default CommentForm