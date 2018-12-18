import qs from 'query-string';

const payeesDAO = {};
const baseUrl = 'http://localhost:8001/payees';

payeesDAO.size = () => {
  return fetch( `${ baseUrl }?_limit=1` )
    .then( response => response.headers.get( 'X-Total-Count' ) );
};

payeesDAO.get = ( id ) => {
  return fetch( `${ baseUrl }/${ id }` )
    .then( response => response.json() );
};

payeesDAO.list = ( criteria = {} ) => {
  return fetch( `${ baseUrl }?${ qs.stringify( criteria ) }` )
    .then( response => response.json() );
};

payeesDAO.save = ( payee ) => {
  return fetch( `${ baseUrl }/${ payee.id }`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( payee ),
  } )
    .then( response => {
      console.log( response );
      if ( response.status < 400 ) {
        return fetch( `${ baseUrl }/${ payee.id }` );
      } else {
        console.error( `Could not save payee # ${ payee.id }: `, response );
      }
    } );
};

export { payeesDAO };