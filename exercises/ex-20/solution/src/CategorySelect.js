import React, { Component } from 'react';

class CategorySelect extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      categories: []
    };
    fetch( 'http://localhost:8001/categories' )
      .then( response => response.json() )
      .then( categories => this.setState( { categories } ) );
  }

  handleChange = ( event ) => {
    const newCategory = this.state.categories.find( category => category.id === event.currentTarget.value );
    this.props.pickCategory( this.props.name, newCategory );
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor={ this.props.id }>Category: </label>
        <select name={ this.props.name }
                id={ this.props.id }
                className="form-control"
                value={ this.props.value }
                onChange={ this.handleChange }>
          {
            this.state.categories.map( cat => <option value={ cat.id } key={ cat.id }>{ cat.categoryName }</option> )
          }
        </select>
      </div>
    );
  }
}

export default CategorySelect;