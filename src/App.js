import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Products from './pages/Products'
import Cart from './pages/Cart'
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    cart: []
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={() => <Products parentState={this.state.cart} />} exact />
          <Route path='/cart' component={() => <Cart parentState={this.state.cart} />} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
