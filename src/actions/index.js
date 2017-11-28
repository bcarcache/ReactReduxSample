let nextId = 1

export const addRegistry = (first, last, age) => {
  return {
    type: 'ADD_REGISTRY',
    id: nextId++,
    first,
    last,
    age
  }
}

export const editRegistry = (nId, nFirst, nLast, nAge) => {
  return {
    type: 'EDIT_REGISTRY',
    id: nId,
    first: nFirst,
    last: nLast,
    age: nAge
  }
}
