import { Component } from 'react'
import MainNavigation from '../components/MainNavigation'
import './Products.css'

class Products extends Component {


  product = [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ]

  func(x) {
    return () => {
      let update = this.props.parentState.find(z => z.id === x.id)
      update ? update.quantity++ : this.props.parentState.push({ ...x, quantity: 1 })
      this.render()
    }
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
                  <button onClick={this.func(good)}>
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