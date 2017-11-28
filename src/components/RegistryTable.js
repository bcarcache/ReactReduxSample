import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RegistryTableHeader from './RegistryTableHeader'
import RegistryTableRecord from './RegistryTableRecord'

export default class RegistryTable extends Component {
  render () {
    return (
      <table className="table table-bordered">
        <tbody>
          <RegistryTableHeader />
          {this.props.registries.map(registry => (
            <RegistryTableRecord key={registry.id} {...registry} />
          ))}
        </tbody>
      </table>
    )
  }
}

RegistryTable.propTypes = {
  registries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
