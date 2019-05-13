import React, { Component } from 'react'
import api from '../utils/api'

class Input extends Component {
  state = {
    value: '',
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleKeyPress = async e => {
    if (e.which === 13) {
      const data = this.state.value
      const result = await api.postData(data)
      if (result.status === 200) {
        this.setState({ value: '' })
        this.props.handleInputValue(data)
      }
    }
  }

  render() {
    return (
      <input
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
        value={this.state.value}
      />
    )
  }
}

export default Input
