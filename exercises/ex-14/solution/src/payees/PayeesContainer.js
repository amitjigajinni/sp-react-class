import React, {Component} from 'react';
import _sortBy from 'lodash/sortBy';

import {payeesDAO} from '../data/class-data';
import PayeeList from './PayeeList';
import PayeeBrowser from './PayeeBrowser';

class PayeesContainer extends Component {
  constructor( props ) {
    super( props );

    this.views = {
      LIST  : 'list',
      DETAIL: 'detail'
    };

    this.state = {
      view     : this.views.LIST,
      payee    : null,
      payeeList: payeesDAO.list(),
      sortField: ''
    };

    this.handleSort = this.handleSort.bind( this );
    this.handlePayeeSelect = this.handlePayeeSelect.bind( this );
    this.backToList = this.backToList.bind( this );
    this.handleNextPrev = this.handleNextPrev.bind( this );
  }

  handlePayeeSelect( payee ) {
    this.setState( {
      view : this.views.DETAIL,
      payee: payee
    } );
  }

  backToList() {
    this.setState( { view: this.views.LIST } );
  }

  handleNextPrev( payee, direction ) {
    let pos = this.state.payeeList.indexOf( payee );
    let next;

    if ( direction === 'next' ) {
      next = Math.min( pos + 1, this.state.payeeList.length - 1 );
    } else {
      next = Math.max( pos - 1, 0 );
    }

    let nextPayee = this.state.payeeList[ next ];

    this.setState( {
      payee: nextPayee
    } );
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
    let view = ( <PayeeList payees={this.state.payeeList}
                            onPayeeSelect={this.handlePayeeSelect}
                            onListSort={this.handleSort}/> );
    if ( this.state.view === this.views.DETAIL ) {
      view = (
        <PayeeBrowser payee={this.state.payee}
                      onNextPrev={this.handleNextPrev}
                      onBack={this.backToList}/>
      );

    }

    return (
      <div>
        {view}
      </div>
    );
  }
}

export default PayeesContainer;
