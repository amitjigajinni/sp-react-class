import React, { Component } from 'react';
import PayeeForm from './PayeeForm';
import { payeesDAO } from './payees-dao';

class PayeeEditForm extends Component {
  constructor( props ) {
    super( props );

    this.payeesDAO = payeesDAO;

    this.state = {
      payee: null
    };

    this.fetchData();
    this.handleSavePayee = this.handleSavePayee.bind( this );
  }

  fetchData() {
    const { match, payeeId } = this.props;
    this.payeesDAO.get( match.params.id || payeeId )
        .then( payee => this.setState( { payee } ) );
  }

  handleSavePayee( payee ) {
    console.log( 'PayeeEditForm: ', this.props );
    this.payeesDAO.save( payee )
        .then( () => this.props.history.push( `/payees/detail/${ payee.id }` ) );

  }

  componentDidUpdate( prevProps ) {
    if ( prevProps.match.params.id !== this.props.match.params.id ) {
      this.fetchData();
    }
  }

  render() {
    return (
      this.state.payee === null ?
      <p>Awaiting payee....</p> :
      <PayeeForm payee={ this.state.payee } savePayee={ this.handleSavePayee }/>
    );
  }
}

export default PayeeEditForm;