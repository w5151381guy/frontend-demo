import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { initData, postData, deleteData } from '../redux/action/action'
import OnSubmit from './OnSubmit'
import List from './List'

const mapStateToProps = state => ({
  data: state.data,
})

const mapDispatchToProps = { initData, postData, deleteData }

class App extends Component {
  componentDidMount() {
    this.props.initData()
  }

  render() {
    // state from redux
    const { data } = this.props

    // action from redux
    const { postData, deleteData } = this.props
    return (
      <Fragment>
        <OnSubmit postData={postData} />
        <List data={data} deleteData={deleteData} />
      </Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
