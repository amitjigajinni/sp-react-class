import React, { Component } from 'react';
import PayeeBrowser from './PayeeBrowser';
import { payeesDAO } from './payees-dao';

class PayeeBrowserRouted extends Component {
  constructor( props ) {
    super( props );
    this.payeesDAO = payeesDAO;
    this.state = {
      payee: null
    };
    this.fetchData();
  }

  componentDidUpdate( prevProps ) {
    if ( prevProps.match.params.id !== this.props.match.params.id ) {
      console.log('PayeeBrowserRouted: Updating based on changed props.');
      this.fetchData();
    }
  }

  fetchData() {
    const { match, payeeId } = this.props;
    this.payeesDAO.get( match.params.id || payeeId )
        .then( payee => this.setState( { payee } ) );
  }

  render() {
    return (
      this.state.payee === null ?
      <p>Loading payee....</p> :
      <PayeeBrowser payee={ this.state.payee } {...this.props}/>
    );
  }
}

export default PayeeBrowserRouted;