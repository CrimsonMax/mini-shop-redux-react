import React, { useReducer } from "react"
import { ADD_ITEM, DELETE_ITEM, shopReducer } from "./reducers"
import shopContext from "./shop-context"

export const GlobalState = props => {
  const product = [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ]
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] })

  const addProduct = good => {
    return dispatch({
        type: ADD_ITEM,
        good
      })
  }

  const deleteProduct = productId => {
    return dispatch({
        type: DELETE_ITEM,
        productId
      })
  }

  return (
    <shopContext.Provider 
    value={{
      product,
      cart: cartState.cart,
      addProduct,
      deleteProduct
    }}
    >
      {props.children}
    </shopContext.Provider>
  )
}