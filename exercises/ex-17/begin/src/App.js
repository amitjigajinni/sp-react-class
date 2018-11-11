import React, {Component} from 'react';

import './css/local.css';

import PayeeDetailRedux from './payees/PayeeDetailRedux';

export default class App extends Component {
  render() {
    return (
      <section>
        <PayeeDetailRedux/>
      </section>
    );
  }
}