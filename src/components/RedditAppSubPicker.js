import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RedditAppSubPicker extends Component {
  render() {
    const { value, onChange } = this.props

    return (
      <span>
        <center><h1>{value}</h1></center>
        <input type='text' className='form-control' onChange={e => onChange(e.target.value)} value={value}/>
      </span>
    )
  }
}

RedditAppSubPicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
