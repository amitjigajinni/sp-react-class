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
