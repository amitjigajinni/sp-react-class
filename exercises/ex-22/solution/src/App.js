import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import './css/local.css';

import Navbar from './Navbar';
import PayeesContainer from './payees/PayeesContainer';
import payeeApp from './payees/payee-reducers';

const store = createStore(
  payeeApp,
  applyMiddleware( thunk )
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <section>
          <Navbar/>
          <PayeesContainer/>
        </section>
      </Provider>
    );
  }
}