import React, { Component } from 'react';
import CategorySelect from '../CategorySelect';

class PayeeForm extends Component {
  constructor( props ) {
    super( props );

    // Local copy
    this.state = {
      payee: { ...this.props.payee }
    };
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="payee-name">Payee Name: </label>
          <input type="text"
                 name="payeeName"
                 id="payee-name"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address: </label>
          <input type="text"
                 name="address"
                 id="address"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="city">City: </label>
          <input type="text"
                 name="city"
                 id="city"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="state">State: </label>
          <input type="text"
                 name="state"
                 id="state"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip: </label>
          <input type="text"
                 name="zip"
                 id="zip"
                 className="form-control"/>
        </div>
        <CategorySelect name="category"/>
        <div className="form-group">
          <div className="checkbox">
            <label>
              <input type="checkbox"
                     name="active"/>
              Active
            </label>
          </div>
        </div>
      </form>
    );
  }
}

export default PayeeForm;