import actionTypes from './actionType'
import api from '../../utils/api'

const deleteToDo = index => ({
  type: actionTypes.DELETE_TODO,
  payload: { index },
})

const addToDo = data => ({
  type: actionTypes.ADD_TODO,
  payload: { data },
})

const initToDo = data => ({
  type: actionTypes.INIT_TODO,
  payload: { data },
})

export const initData = () => async dispatch => {
  const data = await api.getData()
  return dispatch(initToDo(data))
}

export const addData = data => async dispatch => {
  const result = await api.postData(data)
  if (result.status === 200) {
    return dispatch(addToDo(data))
  }
}

export const deleteData = index => async dispatch => {
  const result = await api.deleteData(index)
  if (result.status === 200) {
    return dispatch(deleteToDo(index))
  }
}
