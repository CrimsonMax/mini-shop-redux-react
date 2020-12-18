import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Products from './pages/Products'
import Cart from './pages/Cart'
import './App.css';
import { Component } from 'react';
import GlobalState from './context/GlobalState';

class App extends Component {

  render() {
    return (
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Products} exact />
            <Route path='/cart' component={Cart} exact />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
  }
}

export default App;
