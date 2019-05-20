import React, { Component } from 'react'

const Form = props => {
  if (props.isVisible) {
    return (
      <form>
        <div>
          <span>帳號：</span>
          <input onChange={props.handleAccountChange} />
        </div>
        <div>
          <span>密碼：</span>
          <input
            onChange={props.handlePassWordChange}
            onKeyPress={props.handleKeyPress}
          />
        </div>
      </form>
    )
  } else {
    return ''
  }
}

class LoginForm extends Component {
  state = { isVisible: false, account: '', password: '', buttonContent: '登入' }

  handleClick = e => {
    if (this.props.isLogin) {
      const promise = this.props.checkLogout()
      promise.then(() => {
        if (this.props.isLogin) {
          this.setState({ isVisible: false, buttonContent: '登出' })
        } else {
          this.setState({ isVisible: true, buttonContent: '登入' })
        }
      })
    } else {
      this.setState({ isVisible: true })
    }
  }

  handleAccountChange = e => {
    this.setState({ account: e.target.value })
  }

  handlePassWordChange = e => {
    this.setState({ password: e.target.value })
  }

  handleKeyPress = e => {
    if (e.which === 13) {
      const { account, password } = this.state
      const promise = this.props.checkLogin(account, password)
      promise.then(() => {
        if (this.props.isLogin) {
          this.setState({ isVisible: false, buttonContent: '登出' })
        } else {
          this.setState({ isVisible: true, buttonContent: '登入' })
        }
      })
    }
  }

  render() {
    const { isVisible, buttonContent } = this.state
    return (
      <div>
        <button onClick={this.handleClick}>{buttonContent}</button>
        <Form
          isVisible={isVisible}
          handleAccountChange={this.handleAccountChange}
          handlePassWordChange={this.handlePassWordChange}
          handleKeyPress={this.handleKeyPress}
        />
      </div>
    )
  }
}

export default LoginForm
