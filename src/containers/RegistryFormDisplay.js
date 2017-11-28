import React from 'react'
import { connect } from 'react-redux'
import { addRegistry, editRegistry } from '../actions'
import RegistrySaveButton from '../components/RegistrySaveButton'

var gfDispatch

const fOnSubmit = e => {
  e.preventDefault()

  //Input Data Validation
  var iptFirst = document.getElementById('inputFirst')
  var iptLast = document.getElementById('inputLast')
  var iptAge = document.getElementById('inputAge')
  var recordId = document.getElementById('recordId')

  if (!iptFirst.value.trim()) {
    return
  } else if (!iptLast.value.trim()) {
    return
  } else if (iptAge.value < 0 || iptAge.value > 120 || !iptAge.value.trim()) {
    iptAge.setCustomValidity('Must be a number between 0 and 120')
    return
  }

  if (!recordId.value) {
    gfDispatch(addRegistry(iptFirst.value, iptLast.value, parseInt(iptAge.value,0)))
  } else {
    gfDispatch(editRegistry(recordId.value, iptFirst.value, iptLast.value, parseInt(iptAge.value,0)))
  }

  iptFirst.value = ''
  iptLast.value = ''
  iptAge.value = ''
  recordId.value = ''
  var elements = document.getElementsByClassName('info')
  while(elements.length > 0){
      elements[0].className = ''
  }
}

let RegistryFormDisplay = ({ dispatch }) => {
  if (!gfDispatch) {
    gfDispatch = dispatch
  }

  return (
    <div>
      <form onSubmit={fOnSubmit}>
        <input type='hidden' id='recordId' key={'recordId'}/>
        First:<br/>
        <input type='text' required id='inputFirst' key={'inputFirst'} placeholder='First Name' className='form-control'/><br/>
        Last:<br/>
        <input type='text' required id='inputLast' key={'inputLast'} placeholder='Last Name' className='form-control'/><br/>
        Age:<br/>
        <input type='number' id='inputAge' key={'inputAge'} placeholder='Age' className='form-control'/><br/>
        <RegistrySaveButton />
      </form>
    </div>
  )
}

export default connect()(RegistryFormDisplay)
