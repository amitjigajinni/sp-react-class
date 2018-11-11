import React, {Component} from 'react';
import {payeesDAO} from '../data/class-data';

class PayeeDetail extends Component {
  constructor( props ) {
    super( props );
    this.payeeList = payeesDAO.list();

    this.state = {
      payee: props.payee
    };

    this.handlePrevious = this.handlePrevious.bind( this );
    this.handleNext = this.handleNext.bind( this );
  }

  handlePrevious( e ) {
    console.log( 'You clicked on the %s button.', e.target.name );
    let pos = this.payeeList.indexOf( this.state.payee ),
      prevPos = Math.max( pos - 1, 0 ),
      prevPayee = this.payeeList[ prevPos ];

    this.setState( {
      payee: prevPayee
    } );
  }

  handleNext( e ) {
    console.log( 'You clicked on the %s button.', e.target.name );

    let pos = this.payeeList.indexOf( this.state.payee ),
      nextPos = Math.min( pos + 1, this.payeeList.length - 1 ),
      nextPayee = this.payeeList[ nextPos ];

    this.setState( {
      payee: nextPayee
    } );
  }

  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">{this.state.payee.payeeName}</div>
          <ul className="list-group">
            <li className="list-group-item">{this.state.payee.payeeName}</li>
            <li className="list-group-item">{this.state.payee.address}</li>
            <li className="list-group-item">{this.state.payee.city}, {this.state.payee.state} {this.state.payee.zip}</li>
            <li className="list-group-item">Category: {this.state.payee.category.categoryName}</li>
          </ul>
        </div>
        <div className="text-center">
          <div className="btn-group">
            <button onClick={this.handlePrevious}
                    name="previous"
                    className="btn btn-default">
              &laquo; Prev
            </button>
            <button onClick={this.handleNext}
                    name="next"
                    className="btn btn-default">
              Next &raquo;
            </button>
          </div>
        </div>
      </div>
    );

  }
}
;

export default PayeeDetail;