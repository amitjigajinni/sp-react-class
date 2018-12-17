import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import './css/local.css';

import Navbar from './Navbar';
import PayeesContainer from './payees/PayeesContainer';
import CategoriesContainer from './CategoriesContainer';
import TransactionsContainer from './TransactionsContainer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <Navbar/>
          <Route path="/categories" component={ CategoriesContainer }/>
          <Route path="/payees" component={ PayeesContainer }/>
          <Route path="/tx" component={ TransactionsContainer }/>
          <Route path="/" exact render={ () => <Redirect to="/payees"/> }/>
        </section>
      </Router>
    );
  }
}