import { Component } from 'react'
import MainNavigation from '../components/MainNavigation'
import './Products.css'

class Products extends Component {

  

  add(x) {
    let update = this.props.parentState.find(z => z.id === x.id)
    update ? update.quantity++ : this.props.parentState.push({ ...x, quantity: 1 })
  }

  render() {

    return (
      <>
        <MainNavigation cart={this.props.parentState} />
        <main className="products">
          <ul>
            {this.product.map(good => (
              <li key={good.id}>
                <div>
                  <strong>{good.title}</strong> - ${good.price}
                </div>
                <div>
                  <button onClick={() => this.add(good)}>
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

export default Products