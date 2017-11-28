import React from 'react'
import RegistryAppMain from '../components/RegistryAppMain'

export default class registryApp extends React.Component {
  render() {
    return (
      <RegistryAppMain jumboStr={'Please fill in the information form bellow'} NavTo={'/'} appHeader='Registration Form' appStore='registration'/>
    )
  }
}
