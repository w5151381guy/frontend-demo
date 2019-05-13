import React, { Component } from 'react'
import MyApp from './component/App'
import { Provider } from 'react-redux'
import store from './redux/store/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    )
  }
}

export default App
