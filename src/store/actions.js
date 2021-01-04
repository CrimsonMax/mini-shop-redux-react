export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const DELETE_ITEM_FROM_CART = 'DELETE_ITEM_FROM_CART'

export const addProduct = good => {
  return dispatch({
      type: ADD_ITEM_TO_CART,
      payload: good
    })
}

export const deleteProduct = productId => {
  return dispatch({
      type: DELETE_ITEM_FROM_CART,
      payload: productId
    })
}