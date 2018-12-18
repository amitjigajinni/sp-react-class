import React from 'react';

const PayeesSearch = ( props ) => {
  return (
    <form>
      <div className="row">
        <div className="form-group">
          <div className="col-md-2">
            <label htmlFor="search-text">Search on Payee Name: </label>
          </div>
          <div className="col-md-9">
            <input type="text"
                   name="searchText"
                   id="search-text"
                   className="form-control"/>
          </div>
          <div className="col-md-1">
            <button type="button"
                    className="btn btn-primary">Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PayeesSearch;