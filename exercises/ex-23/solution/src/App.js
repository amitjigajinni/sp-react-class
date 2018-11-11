import React, {Component} from 'react';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux';

import './css/local.css';

import Navbar from './Navbar';
import PayeesContainer from './payees/PayeesContainer';
import payeeApp from './payees/payee-reducers';

const history = createHistory();
const localRouterMiddleware = routerMiddleware( history );

/*
 const payeeApp = combineReducers( { reducers, router: routerReducer } );

 const store = createStore( payeeApp,
 compose( applyMiddleware( thunk ), applyMiddleware( localRouterMiddleware ) ) );
 */

const store = createStore( payeeApp, applyMiddleware( thunk ) );

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <section>
            <Navbar/>
            <PayeesContainer/>
          </section>
        </ConnectedRouter>
      </Provider>
    );
  }
}