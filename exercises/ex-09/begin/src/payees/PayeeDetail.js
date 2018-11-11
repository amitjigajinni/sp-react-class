import React, {Component} from 'react';
import {payeesDAO} from '../data/class-data';

class PayeeDetail extends Component {
  constructor( props ) {
    super( props );
  }

  handlePrevious( e ) {
    console.log( 'You clicked on the %s button.', e.target.name );
  }

  handleNext( e ) {
    console.log( 'You clicked on the %s button.', e.target.name );
  }

  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">{this.props.payee.payeeName}</div>
          <ul className="list-group">
            <li className="list-group-item">{this.props.payee.payeeName}</li>
            <li className="list-group-item">{this.props.payee.address}</li>
            <li className="list-group-item">{this.props.payee.city}, {this.props.payee.state} {this.props.payee.zip}</li>
            <li className="list-group-item">Category: {this.props.payee.category.categoryName}</li>
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