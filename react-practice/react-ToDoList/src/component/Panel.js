import React, { Component } from 'react'

const Item = props =>
  props.datas.map((data, index) => (
    <div key={index}>
      {data}
      <span
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => props.onClick(index)}>
        {' '}
        delete
      </span>
    </div>
  ))

class Panel extends Component {
  render() {
    return <Item datas={this.props.data} onClick={this.props.deleteData} />
  }
}

export default Panel
