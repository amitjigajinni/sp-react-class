export const toggleActive = () => {
  return {
    type: 'TOGGLE_PAYEE_ACTIVE'
  };
};

export const getNextPrev = ( payee, payees, direction, history ) => {
  history.push('/detail/' + payee.id);
  return {
    type: 'GET_NEXT_PREV_PAYEE',
    payee,
    payees,
    direction
  };
};

export const setSortField = ( lastSort, nextSort ) => {
  return {
    type: 'SET_SORT_FIELD',
    lastSort,
    nextSort
  };
};

export const setPayee = ( payee, history ) => {
  history.push('/detail/' + payee.id);
  return {
    type: 'SET_PAYEE',
    payee,
    view: 'detail'
  };
};

// Thunk-oriented actions
// Action creators
export const setHasErrored = ( bool ) => {
  return {
    type      : 'PAYEES_HAS_ERRORED',
    hasErrored: bool
  };
};

export const setIsLoading = ( bool ) => {
  return {
    type     : 'PAYEES_IS_LOADING',
    isLoading: bool
  };
};

export const setFetchDataSuccess = ( payees, id ) => {
  return {
    type: 'PAYEES_FETCH_DATA_SUCCESS',
    payees,
    id
  };
};

// Thunk meta-action

export const payeesFetchData = ( url, id ) => {
  return ( dispatch ) => {
    dispatch( setIsLoading( true ) );

    fetch( url )
      .then( ( response ) => {
        if ( !response.ok ) {
          throw Error( response.statusText );
        }

        dispatch( setIsLoading( false ) );

        return response;
      } )
      .then( ( response ) => response.json() )
      .then( ( payees ) => dispatch( setFetchDataSuccess( payees, id ) ) )
      .catch( () => dispatch( setHasErrored( true ) ) );
  };
};
