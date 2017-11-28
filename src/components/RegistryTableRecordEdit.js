import React, { Component } from 'react'

const fOnRowEditClick = e => {
  e.preventDefault()
  var recordId = e.target.id.split("btnEdit")[1]
  if (!recordId) {
    recordId = e.currentTarget.id.split("btnEdit")[1]
  }

  document.getElementById('recordId').value = recordId
  document.getElementById('inputFirst').value = document.getElementById('tablerowrecordfirst' + recordId).innerHTML
  document.getElementById('inputLast').value = document.getElementById('tablerowrecordlast' + recordId).innerHTML
  document.getElementById('inputAge').value = document.getElementById('tablerowrecordage' + recordId).innerHTML
  var elements = document.getElementsByClassName('info')
  while(elements.length > 0){
      elements[0].className = ''
  }
  document.getElementById('tablerowrecord' + recordId).className = 'info'
}

export default class RegistryTableRecordEdit extends Component {
  render() {
    return (
      <button name={'btnEdit' + this.props.recordId} id={'btnEdit' + this.props.recordId} key={'btnEdit' + this.props.recordId} onClick={fOnRowEditClick} className="btn btn-default btn-xs">
        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
      </button>
    )
  }
}
