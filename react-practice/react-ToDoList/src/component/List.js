import React, { Component } from 'react'
import api from '../utils/api'

class List extends Component {
  handleDelete = async index => {
    const result = await api.deleteData(index)
    if (result.status === 200) {
      this.props.handleList(index)
    }
  }

  render() {
    return this.props.value.map((data, index) => {
      return (
        <div key={index}>
          {data}
          <span
            onClick={() => this.handleDelete(index)}
            style={{ color: 'red', cursor: 'pointer' }}>
            {' '}
            delete
          </span>
        </div>
      )
    })
  }
}

export default List
