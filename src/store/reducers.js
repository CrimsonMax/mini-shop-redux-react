import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actions"

const initialState = {
  product: [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ],
  cart: []
}

const shopReducer = (state = initialState, action) => {
  let updateCart
  let itemIndex

  switch (action.type) {
    case ADD_PRODUCT:
      updateCart = [...state.cart]
      itemIndex = updateCart.findIndex(item => item.id === action.payload.id)

      if (itemIndex < 0) {
        updateCart.push({ ...action.payload, quantity: 1 })
      } else {
        const updateItem = {
          ...updateCart[itemIndex]
        }
        updateItem.quantity++
        updateCart[itemIndex] = updateItem
      }

      return { ...state, cart: updateCart }

    case REMOVE_PRODUCT:
      updateCart = [...state.cart]
      itemIndex = updateCart.findIndex(item => item.id === action.payload)
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

    default:
      return state
  }
}

export default shopReducer