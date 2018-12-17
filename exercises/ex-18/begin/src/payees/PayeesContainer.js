import React, { Component } from 'react';
import _sortBy from 'lodash/sortBy';

import { payeesDAO } from './payees-dao';
import PayeeList from './PayeeList';
import { Redirect, Route } from 'react-router-dom';

class PayeesContainer extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      payee: null,
      payeeList: [],
      sortField: ''
    };

    this.payeesDAO = payeesDAO;
    this.payeesDAO.list().then( payees => this.setState( { payeeList: payees } ) );

    this.handleSort = this.handleSort.bind( this );
    this.handlePayeeSelect = this.handlePayeeSelect.bind( this );
    this.handleNextPrev = this.handleNextPrev.bind( this );
  }

  handlePayeeSelect( payee ) { }

  handleNextPrev( payee, direction ) {
    const pos = this.state.payeeList.indexOf( payee );
    let next;

    if ( direction === 'next' ) {
      next = Math.min( pos + 1, this.state.payeeList.length - 1 );
    } else {
      next = Math.max( pos - 1, 0 );
    }

    const nextPayee = this.state.payeeList[ next ];

  }

  backToList() {

  }

  handleSort( sortField ) {
    if ( this.state.sortField === sortField ) {
      this.setState( {
        sortField: sortField,
        payeeList: this.state.payeeList.reverse()
      } );
    } else {
      this.setState( {
        sortField: sortField,
        payeeList: _sortBy( this.state.payeeList, [ sortField ] )
      } );
    }
  }

  render() {
    return (
      <div>
        <Route path={ `${this.props.match.url}/list` } render={ () => (
          <PayeeList payees={ this.state.payeeList }
                     onPayeeSelect={ this.handlePayeeSelect }
                     onListSort={ this.handleSort }/>
        ) }/>
        <Route path={ this.props.match.url } exact render={ () => <Redirect to={ `${this.props.match.url}/list` }/> }/>
      </div>
    );
  }
}

export default PayeesContainer;
