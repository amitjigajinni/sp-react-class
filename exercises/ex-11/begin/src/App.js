import React, {Component} from 'react';

import './css/local.css';

import PayeesContainer from './payees/PayeesContainer';

export default class App extends Component {
  render() {
    return (
      <section>
        <PayeesContainer/>
      </section>
    );
  }
}