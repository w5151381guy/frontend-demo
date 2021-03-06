import React, { Component } from 'react'
import validator from 'validator'

const Item = props => {
  const { content, index, isLogin } = props
  let htmlElement
  let [left, right] = content.split('x')
  if (validator.isInt(left) && validator.isInt(right)) {
    htmlElement = <img src={`https://fakeimg.pl/${content}`} height={100} />
  } else {
    htmlElement = content
  }
  return (
    <div>
      {htmlElement}
      {isLogin ? (
        <span
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => props.onClick(index)}>
          delete
        </span>
      ) : (
        ''
      )}
    </div>
  )
}

class List extends Component {
  render() {
    return this.props.data.map((content, index) => (
      <Item
        key={index}
        content={content}
        index={index}
        isLogin={this.props.isLogin}
        onClick={this.props.deleteData}
      />
    ))
  }
}

export default List
