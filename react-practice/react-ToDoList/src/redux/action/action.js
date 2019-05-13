import actionTypes from './actionType'

export const deleteToDo = index => ({
  type: actionTypes.DELETE_TODO,
  payload: { index },
})

export const addToDo = value => ({
  type: actionTypes.ADD_TODO,
  payload: { value },
})

export const initToDo = value => ({
  type: actionTypes.INIT_TODO,
  payload: { value },
})
