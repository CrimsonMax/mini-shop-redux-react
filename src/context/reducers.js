export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

const addProduct = (good, state) => {
  const updateCart = [...state.cart]
  const itemIndex = updateCart.findIndex(item => item.id === good.id)

  if (itemIndex < 0) {
    updateCart.push({ ...good, quantity: 1 })
  } else {
    const updateItem = {
      ...updateCart[itemIndex]
    }
    updateItem.quantity++
    updateCart[itemIndex] = updateItem
  }

  return { ...state, cart: updateCart }
}

const deleteProduct = (productId, state) => {
  const updateCart = [...state.cart]
  const itemIndex = updateCart.findIndex(item => item.id === productId)
  const updateItem = {
    ...updateCart[itemIndex]
  }
  updateItem.quantity--
  if (updateItem.quantity <= 0) {
    updateCart.splice(itemIndex, 1)
  } else {
    updateCart[itemIndex] = updateItem
  }

  return { ...state, cart: updateCart }
}

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return addProduct(action.good, state)
    case DELETE_ITEM:
      return deleteProduct(action.productId, state)
    default:
      return state
  }
}