import actionTypes from '../action/actionType'

const initialState = {
  data: [],
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.DELETE_TODO: {
      const { index } = payload
      let newData = [...state.data]
      newData.splice(index, 1)
      return {
        ...state,
        data: newData,
      }
    }

    case actionTypes.ADD_TODO: {
      const { data } = payload
      let newData = [...state.data, data]
      return {
        ...state,
        data: newData,
      }
    }

    case actionTypes.INIT_TODO: {
      const { data } = payload
      return {
        ...state,
        data,
      }
    }

    default:
      return { ...state }
  }
}

export default reducer
