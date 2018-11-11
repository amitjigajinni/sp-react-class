export const toggleActive = () => {
  return {
    type: 'TOGGLE_PAYEE_ACTIVE'
  };
};

export const getNextPrev = ( payee, payees, direction ) => {
  return {
    type: 'GET_NEXT_PREV_PAYEE',
    payee,
    payees,
    direction
  };
};

export const switchView = ( view ) => {
  return {
    type: 'SWITCH_VIEW',
    view
  };
};

export const setSortField = ( lastSort, nextSort ) => {
  return {
    type: 'SET_SORT_FIELD',
    lastSort,
    nextSort
  };
};

export const setPayee = ( payee ) => {
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

export const setFetchDataSuccess = ( payees ) => {
  return {
    type: 'PAYEES_FETCH_DATA_SUCCESS',
    payees
  };
};

// Thunk meta-action

export const payeesFetchData = ( url ) => {
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
      .then( ( payees ) => dispatch( setFetchDataSuccess( payees ) ) )
      .catch( () => dispatch( setHasErrored( true ) ) );
  };
};
