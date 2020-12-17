export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export const addProduct = good => {
  return dispatch => {
    dispatch({
      type: ADD_PRODUCT,
      payload: good
    })
  }
}

export const removeProduct = productId => {
  return dispatch => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: productId
    })
  }
}