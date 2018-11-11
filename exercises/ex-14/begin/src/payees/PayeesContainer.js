import React, {Component} from 'react';

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
      payeeList: payeesDAO.list()
    };

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

  render() {
    let view = ( <PayeeList payees={this.state.payeeList}
                            onPayeeSelect={this.handlePayeeSelect}/> );
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
