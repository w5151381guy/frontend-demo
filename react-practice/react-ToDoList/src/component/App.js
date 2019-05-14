import React, { Component, Fragment } from 'react'
import api from '../utils/api'
import Input from './Input'
import List from './List'

class App extends Component {
  state = {
    data: [],
  }

  initListData = async () => {
    const data = await api.getData()
    this.setState({ data })
  }

  postListData = async data => {
    const result = await api.postData(data)
    if (result.status === 200) {
      const newData = [...this.state.data, data]
      this.setState({ data: newData })
    }
  }

  deleteListData = async index => {
    const result = await api.deleteData(index)
    if (result.status === 200) {
      let newData = [...this.state.data]
      newData.splice(index, 1)
      this.setState({ data: newData })
    }
  }

  componentDidMount() {
    this.initListData()
  }

  render() {
    const { data } = this.state
    return (
      <Fragment>
        <Input postListData={this.postListData} />
        <List data={data} deleteData={this.deleteListData} />
      </Fragment>
    )
  }
}

export default App
