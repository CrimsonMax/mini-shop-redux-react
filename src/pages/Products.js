import { Component } from 'react'
import MainNavigation from '../components/MainNavigation'
import './Products.css'
import ShopContent from '../context/shop-context'

class Products extends Component {

  render() {
    return (
      <ShopContent.Consumer>
        { context => (
          <>
            <MainNavigation cartItemCount={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)} />
            <main className="products">
              <ul>
                {context.product.map(good => (
                  <li key={good.id}>
                    <div>
                      <strong>{good.title}</strong> - ${good.price}
                    </div>
                    <div>
                      <button onClick={context.addProduct.bind(this, good)}>
                        Add to Cart
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

export default Products