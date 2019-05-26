import React, { Component } from 'react'

class Input extends Component {
  state = {
    data: '',
  }

  handleChange = e => {
    this.setState({ data: e.target.value })
  }

  handleKeyPress = e => {
    if (e.which === 13) {
      const { data } = this.state
      this.props.onSubmit(data)
      this.setState({ data: '' })
    }
  }

  render() {
    const { data } = this.state
    return (
      <input
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        value={data}
      />
    )
  }
}

export default Input
