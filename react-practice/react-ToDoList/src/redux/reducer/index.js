const initialState = {
  data: [],
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'DELETE_TODO': {
      const { index } = payload
      let newData = [...state.data]
      newData.splice(index, 1)
      return {
        ...state,
        data: newData,
      }
    }

    case 'ADD_TODO': {
      const { data } = payload
      let newData = [...state.data, data]
      return {
        ...state,
        data: newData,
      }
    }

    case 'INIT_TODO': {
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
