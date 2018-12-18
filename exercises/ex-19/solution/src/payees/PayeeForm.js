import React, { Component } from 'react';
import CategorySelect from '../CategorySelect';

class PayeeForm extends Component {

  constructor( props ) {
    super( props );

    // Local copy
    this.state = {
      payee: { ...this.props.payee }
    };

    this.handleChange = this.handleChange.bind( this );
    this.updateState = this.updateState.bind( this );
    this.handleSave = this.handleSave.bind( this );
    this.resetState = this.resetState.bind( this );
  }

  handleChange( event ) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.updateState( name, value );
  }

  updateState( name, value ) {
    console.log( `${ name }: ${ value }` );
    const updatedPayee = { ...this.state.payee };
    updatedPayee[ name ] = value;
    this.setState( {
      payee: updatedPayee
    } );
  }

  handleSave() {
    this.props.savePayee( this.state.payee );
  }

  resetState() {
    this.setState( {
      payee: this.props.payee
    } );
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="payee-name">Payee Name: </label>
          <input type="text"
                 onChange={ this.handleChange }
                 value={ this.state.payee.payeeName }
                 name="payeeName"
                 id="payee-name"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address: </label>
          <input type="text"
                 onChange={ this.handleChange }
                 value={ this.state.payee.address }
                 name="address"
                 id="address"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="city">City: </label>
          <input type="text"
                 onChange={ this.handleChange }
                 value={ this.state.payee.city }
                 name="city"
                 id="city"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="state">State: </label>
          <input type="text"
                 onChange={ this.handleChange }
                 value={ this.state.payee.state }
                 name="state"
                 id="state"
                 className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip: </label>
          <input type="text"
                 onChange={ this.handleChange }
                 value={ this.state.payee.zip }
                 name="zip"
                 id="zip"
                 className="form-control"/>
        </div>
        <CategorySelect name="category"
                        value={ this.state.payee.category.id }
                        pickCategory={ this.updateState }/>
        <div className="form-group">
          <div className="checkbox">
            <label>
              <input type="checkbox"
                     checked={ this.state.payee.active }
                     onChange={ this.handleChange }
                     name="active"/>
              Active
            </label>
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-success" onClick={ this.handleSave }>Save</button>
          &nbsp;
          <button type="button" className="btn btn-danger" onClick={ this.resetState }>Reset</button>
        </div>
      </form>
    );
  }
}

export default PayeeForm;