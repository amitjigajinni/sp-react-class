import React from 'react';

const PayeesSearch = ( props ) => {
  let searchText = '';

  return (
    <form>
      <div className="row">
        <div className="form-group">
          <div className="col-md-2">
            <label htmlFor="search-text">Search on Payee Name: </label>
          </div>
          <div className="col-md-9">
            <input type="text"
                   onBlur={ ( event ) => searchText = event.target.value }
                   name="searchText"
                   id="search-text"
                   className="form-control"/>
          </div>
          <div className="col-md-1">
            <button type="button"
                    className="btn btn-primary"
                    onClick={ () => props.searchPayees( searchText ) }>Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PayeesSearch;