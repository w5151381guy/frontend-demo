import React, { Component } from 'react'
import styled from 'styled-components'
import Title from './component/Title'
import './App.css'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`

class TodoList extends Component {
  render() {
    return (
      <AppContainer>
        <Title>Todo List</Title>
      </AppContainer>
    )
  }
}

export default TodoList
