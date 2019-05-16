import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { initData, addData, deleteData } from '../redux/action/action'
// import api from '../utils/api'
import Input from './Input'
import List from './List'

const mapStateToProps = state => ({
  data: state.data,
})

const mapDispatchToProps = { initData, addData, deleteData }

class App extends Component {
  // state = {
  //   data: [],
  // }

  // initListData = async () => {
  //   const data = await api.getData()
  //   this.setState({ data })
  // }

  // postListData = async data => {
  //   const result = await api.postData(data)
  //   if (result.status === 200) {
  //     const newData = [...this.state.data, data]
  //     this.setState({ data: newData })
  //   }
  // }

  // deleteListData = async index => {
  //   const result = await api.deleteData(index)
  //   if (result.status === 200) {
  //     let newData = [...this.state.data]
  //     newData.splice(index, 1)
  //     this.setState({ data: newData })
  //   }
  // }

  componentDidMount() {
    this.props.initData()
  }

  render() {
    const { data } = this.props
    return (
      <Fragment>
        <Input postListData={this.props.addData} />
        <List data={data} deleteData={this.props.deleteData} />
      </Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
