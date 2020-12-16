import { Component } from 'react'
import MainNavigation from '../components/MainNavigation'
import tree from '../renderTree'
import './Cart.css'

class Cart extends Component {

  delete(x) {
    let update = this.props.parentState.find(z => z.id === x.id)
    update.quantity > 1 ? update.quantity-- : this.props.parentState.splice(update, 1)
    tree()
  }

  render() {
    return (
      <>
        <MainNavigation cart={this.props.parentState} />
        <main className="cart">
          {this.props.parentState.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.props.parentState.map(item => (
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
    )
  }
}

export default Cart