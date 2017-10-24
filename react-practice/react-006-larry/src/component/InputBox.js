import React, { Component } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: #84bbe7 solid 2px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 20px;
`

class InputBox extends Component {
  state = {
    inputValue: '',
  }

  handleInputChange = e => {
    const value = e.target.value
    this.setState(() => ({ inputValue: value }))
  }

  handleKeyPress = e => {
    const { onSubmit } = this.props
    const { inputValue } = this.state
    if (e.charCode === 13) {
      // press enter
      onSubmit(inputValue)

      // clean input
      this.setState(() => ({
        inputValue: '',
      }))
    }
  }

  render() {
    return (
      <StyledInput
        placeholder="Type a message here"
        value={this.state.inputValue}
        onChange={this.handleInputChange}
        onKeyPress={this.handleKeyPress}
      />
    )
  }
}

export default InputBox
