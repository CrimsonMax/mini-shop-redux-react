import { Component } from 'react'
import MainNavigation from '../components/MainNavigation'
import './Cart.css'
import ShopContent from '../context/shop-context'

class Cart extends Component {

  // delete(x) {
  //   let update = this.props.parentState.find(z => z.id === x.id)
  //   update.quantity > 1 ? update.quantity-- : this.props.parentState.splice(update, 1)
  // }

  render() {
    return (
      <ShopContent.Consumer>
        { context => (
          <>
            <MainNavigation />
            <main className="cart">
              {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
              <ul>
                {context.cart.map(item => (
                  <li key={item.id}>
                    <div>
                      <strong>{item.title}</strong> - ${item.price} ({item.quantity})
                    </div>
                    <div>
                      <button onClick={() => this.delete(item)}>
                        Remove from Cart
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </main>
          </>
        )}

      </ShopContent.Consumer>
    )
  }
}

export default Cart