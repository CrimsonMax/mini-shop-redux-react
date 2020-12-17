import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import shopReducer from './store/reducers';
import reduxThunk from 'redux-thunk';


const store = createStore(
  shopReducer,
  applyMiddleware(reduxThunk)
)

// FUCK!!!!!!!!!!!!

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);