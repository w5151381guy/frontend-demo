import actionTypes from '../action/actionType'

const initialState = {
  value: [],
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.DELETE_TODO: {
      const { index } = payload
      let data = [...state.value]
      data.splice(index, 1)
      return {
        ...state,
        value: data,
      }
    }

    case actionTypes.ADD_TODO: {
      const { value } = payload
      let data = [...state.value]
      data.push(value)
      return {
        ...state,
        value: data,
      }
    }

    case actionTypes.INIT_TODO: {
      const { value } = payload
      return {
        ...state,
        value,
      }
    }

    default:
      return { ...state }
  }
}

export default reducer
