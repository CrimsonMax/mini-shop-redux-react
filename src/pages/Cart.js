import { Component } from 'react'
import MainNavigation from '../components/MainNavigation'
import './Cart.css'
import { removeProduct } from '../store/actions'
import { connect } from 'react-redux'

class Cart extends Component {

  render() {
    return (
      <>
        <MainNavigation cart={this.props.itemCount} />
        <main className="cart">
          {this.props.cartShop.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.props.cartShop.map(item => (
              <li key={item.id}>
                <div>
                  <strong>{item.title}</strong> - ${item.price} ({item.quantity})
            </div>
                <div>
                  <button onClick={this.props.removeProduct.bind(this, item.id)}>
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

const mapStateToProps = state => {
  return {
    cartShop: state.cart,
    itemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: id => dispatch(removeProduct(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)