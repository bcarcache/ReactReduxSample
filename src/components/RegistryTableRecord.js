import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RegistryTableRecordEdit from './RegistryTableRecordEdit'
import RegistryTableRecordDelete from './RegistryTableRecordDelete'

export default class RegistryTableRecord extends Component {
  render() {
    const { id, first, last, age } = this.props

    return (
      <tr id={'tablerowrecord' + id}>
        <td align='center'>
          {id}
        </td>
        <td id={'tablerowrecordfirst' + id}>
          {first}
        </td>
        <td id={'tablerowrecordlast' + id}>
          {last}
        </td>
        <td id={'tablerowrecordage' + id} align='center'>
          {age}
        </td>
        <td align='center'>
          <RegistryTableRecordEdit recordId={id}/>
          <RegistryTableRecordDelete recordId={id}/>
        </td>
      </tr>
    )
  }
}

RegistryTableRecord.propTypes = {
  id: PropTypes.number.isRequired,
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}
