import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Products from './pages/Products'
import Cart from './pages/Cart'
import './App.css';
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Products} exact />
          <Route path='/cart' component={Cart} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
