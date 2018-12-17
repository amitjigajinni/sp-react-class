import qs from 'query-string';

const payeesDAO = {};
const baseUrl = 'http://localhost:8001/payees';

payeesDAO.size = () => {
  return fetch( `${baseUrl}?_limit=1` )
    .then( response => response.headers.get( 'X-Total-Count' ) );
};

payeesDAO.get = ( id ) => {
  return fetch( `${baseUrl}/${id}` )
    .then( response => response.json() );
};

payeesDAO.list = ( criteria = {} ) => {
  return fetch( `${baseUrl}?${ qs.stringify( criteria ) }` )
    .then( response => response.json() );
};

export { payeesDAO };