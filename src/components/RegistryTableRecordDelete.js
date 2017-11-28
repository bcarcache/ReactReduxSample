import React, { Component } from 'react'

const fOnRowDeleteClick = e => {
  e.preventDefault()
  var recordId = e.target.id.split('btnDelete')[1]
  if (!recordId) {
    recordId = e.currentTarget.id.split("btnDelete")[1]
  }

  var row = document.getElementById('tablerowrecord' + recordId)
  row.parentNode.removeChild(row)
  document.getElementById('recordId').value = ''
  document.getElementById('inputFirst').value = ''
  document.getElementById('inputLast').value = ''
  document.getElementById('inputAge').value = ''
}

export default class RegistryTableRecordDelete extends Component {
  render() {
    return (
      <button name={'btnDelete' + this.props.recordId} id={'btnDelete' + this.props.recordId} key={'btnDelete' + this.props.recordId} onClick={fOnRowDeleteClick} className="btn btn-default btn-xs">
        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
      </button>
    )
  }
}
