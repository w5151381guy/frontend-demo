import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  initData,
  postData,
  deleteData,
  postLogin,
  postLogout,
} from '../redux/action/action'
import Input from './Input'
import List from './List'
import LoginForm from './LoginForm'

const mapStateToProps = state => ({
  data: state.data,
  isLogin: state.isLogin,
})

const mapDispatchToProps = {
  initData,
  postData,
  deleteData,
  postLogin,
  postLogout,
}

class App extends Component {
  state = { key: '' }

  handleValue = content => {
    const { data } = this.props
    if (data.find(el => el === content)) {
      alert('the same input')
      return false
    } else {
      this.props.postData(content)
      return true
    }
  }

  updateData = () => {
    const key = setInterval(() => {
      this.props.initData()
    }, 5000)
    this.setState({ key })
  }

  checkLogin = async (account, password) => {
    try {
      await this.props.postLogin(account, password)
    } catch (error) {
      alert('login fail')
    }
  }

  checkLogout = async () => {
    try {
      await this.props.postLogout()
    } catch (error) {
      console.log(error)
    }
  }

  componentWillUnmount() {
    const { key } = this.state
    clearInterval(key)
  }

  componentDidMount() {
    this.props.initData()
    this.updateData()
  }

  render() {
    // state from redux
    const { data, isLogin } = this.props

    // action from redux
    const { deleteData, postLogout } = this.props
    return (
      <Fragment>
        <LoginForm
          checkLogin={this.checkLogin}
          isLogin={isLogin}
          checkLogout={postLogout}
        />
        <Input handleValue={this.handleValue} />
        <List data={data} deleteData={deleteData} isLogin={isLogin} />
      </Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
