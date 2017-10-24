import React, { Component } from 'react'
import styled from 'styled-components'
import Title from './component/Title'
import List from './component/List'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

class TodoList extends Component {
  state = {
    todos: [
      // in this format
      { content: 'foo', deleted: true },
      { content: 'bar', deleted: false },
    ],
  }

  render() {
    return (
      <AppContainer>
        <Title>Todo List</Title>
        <List todos={this.state.todos} />
      </AppContainer>
    )
  }
}

export default TodoList
