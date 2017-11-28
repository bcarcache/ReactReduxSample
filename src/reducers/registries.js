const registries = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REGISTRY':
      return [
        ...state,
        {
          id: action.id,
          first: action.first,
          last: action.last,
          age: action.age
        }
      ]
    case 'EDIT_REGISTRY':
      var arraylen = state.length
      var nid = action.id
      for (var i = 0; i < arraylen; i++) {
        if (parseInt(state[i]['id'],0) === parseInt(nid,0)) {
          state[i]['first'] = action.first
          state[i]['last'] = action.last
          state[i]['age'] = action.age
        }
      }
      return [
        ...state
      ]
    default:
      return state
  }
}

export default registries
