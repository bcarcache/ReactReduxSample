import { connect } from 'react-redux'
import RegistryTable from '../components/RegistryTable'

const getRegistries = (registries) => {
  return registries
}

const mapStateToProps = state => {
  return {
    registries: getRegistries(state.registries)
  }
}

const RegistryTableDisplay = connect(
  mapStateToProps
)(RegistryTable)

export default RegistryTableDisplay
