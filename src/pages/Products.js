import { Component } from 'react'
import MainNavigation from '../components/MainNavigation'
import './Products.css'
import { addProduct } from '../store/actions'
import { connect } from 'react-redux'

class Products extends Component {

  render() {
    return (
      <>
        <MainNavigation cart={this.props.itemCount} />
        <main className="products">
          <ul>
            {this.props.product.map(good => (
              <li key={good.id}>
                <div>
                  <strong>{good.title}</strong> - ${good.price}
                </div>
                <div>
                  <button onClick={this.props.addProduct.bind(this, good)}>
                    Add to Cart
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
    product: state.product,
    itemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: good => dispatch(addProduct(good))
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(Products)