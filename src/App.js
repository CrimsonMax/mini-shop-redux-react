import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Products from './pages/Products'
import Cart from './pages/Cart'
import './App.css';
import { GlobalState } from './context/GlobalState';

const App = props => {
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

export default App;
