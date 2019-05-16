import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MyApp from './component/App'
import store from './redux/store'

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
