import { Component } from 'react'
import MainNavigation from '../components/MainNavigation'
import './Cart.css'
import ShopContent from '../context/shop-context'

class Cart extends Component {

  render() {
    return (
      <ShopContent.Consumer>
        { context => (
          <>
            <MainNavigation cartItemCount={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)} />
            <main className="cart">
              {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
              <ul>
                {context.cart.map(item => (
                  <li key={item.id}>
                    <div>
                      <strong>{item.title}</strong> - ${item.price} ({item.quantity})
                    </div>
                    <div>
                      <button onClick={context.deleteProduct.bind(this, item)}>
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