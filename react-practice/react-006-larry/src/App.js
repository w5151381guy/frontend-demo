import React, { Component } from 'react'
import styled from 'styled-components'
import Title from './component/Title'
import MessageArea from './component/MessageArea'
import InputBox from './component/InputBox'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 700px;
  margin: 0 auto;
`

const layoutStyles = {
  inputBox: {
    marginTop: '5px',
    width: '100%',
  },
}

class ChatRoom extends Component {
  state = {
    messages: ['Hello', 'World'],
  }

  handleInputSubmit = value => {
    this.setState(prevState => ({
      messages: [...prevState.messages, value],
    }))
  }

  render() {
    const { messages } = this.state
    return (
      <AppContainer>
        <Title>Chat Room</Title>
        {/* <List todos={this.state.todos} /> */}
        <MessageArea messages={messages} />
        <div style={layoutStyles.inputBox}>
          <InputBox onSubmit={this.handleInputSubmit} />
        </div>
      </AppContainer>
    )
  }
}

export default ChatRoom
