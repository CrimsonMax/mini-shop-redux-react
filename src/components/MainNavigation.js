import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './MainNavigation.css'

class MainNavigation extends Component {

  render() {
    return (
      <header className="main-navigation">
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Products</NavLink>
            </li>
            <li>
              <NavLink to='/cart'>Cart ({this.props.cartItemCount})</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default MainNavigation