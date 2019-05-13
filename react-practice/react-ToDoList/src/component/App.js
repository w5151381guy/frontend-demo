import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Input from './Input'
import List from './List'
import api from '../utils/api'
import { deleteToDo, addToDo, initToDo } from '../redux/action/action'

const MapStateToProps = state => ({
  value: state.value,
})

const MapDispatchToProps = { deleteToDo, addToDo, initToDo }

class App extends Component {
  initialList = async () => {
    const data = await api.getData()
    this.props.initToDo(data)
  }

  //   handleList = index => {
  //     let value = this.state.value
  //     value.splice(index, 1)
  //     this.setState({ value })
  //   }

  //   handleInputValue = value => {
  //     let data = this.state.value
  //     data.push(value)
  //     this.setState({ value: data })
  //   }

  componentDidMount() {
    this.initialList()
  }

  render() {
    console.log(this.props.value)
    return (
      <Fragment>
        <Input handleInputValue={this.props.addToDo} />
        <List value={this.props.value} handleList={this.props.deleteToDo} />
      </Fragment>
    )
  }
}

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(App)
