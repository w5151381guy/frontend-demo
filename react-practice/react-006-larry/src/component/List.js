import React from 'react'
import Item from './Item'

const List = ({ todos }) =>
  todos.map(todo => <Item key={todo.content}>{todo.content}</Item>)

export default List
