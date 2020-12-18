import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './MainNavigation.css'
import ShopContent from '../context/shop-context'

class MainNavigation extends Component {

  static contextType = ShopContent

  cartItemCount = this.context.cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0)

  render() {
    return (
      <header className="main-navigation">
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Products</NavLink>
            </li>
            <li>
              <NavLink to='/cart'>Cart ({this.cartItemCount})</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default MainNavigation