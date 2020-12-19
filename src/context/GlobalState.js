import { Component } from "react";
import ShopContent from './shop-context'

class GlobalState extends Component {

  state = {
    product: [
      { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
      { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
      { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
      { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ],
    cart: []
  }

  addProduct = good => {
    const newCart = [...this.state.cart]
    let update = newCart.find(z => z.id === good.id)
    update ? update.quantity++ : newCart.push({ ...good, quantity: 1 })
    this.setState({ cart: newCart})
  }

  deleteProduct = item => {
    const newCart = [...this.state.cart]
    let update = newCart.find(z => z.id === item.id)
    update.quantity > 1 ? update.quantity-- : newCart.splice(update, 1)
    this.setState({ cart: newCart})
  }

  render() {
    return (
      <ShopContent.Provider value={
        {
          product: this.state.product,
          cart: this.state.cart,
          addProduct: this.addProduct,
          deleteProduct: this.deleteProduct
        }
      }>
        {this.props.children}
      </ShopContent.Provider>
    )
  }
}

export default GlobalState