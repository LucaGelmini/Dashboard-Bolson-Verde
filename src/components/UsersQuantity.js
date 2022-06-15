 
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons'

 
 
 
function  UsersQuantity(props) {
    function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
 
 
    return (
        <React.Fragment>
             <div className='cardsContainer'>
                  <div className='card-doble border-left-primary'>
                  <FontAwesomeIcon className='icon-grey' icon= {faUsers} />
                      <h5 className='primary-text'>USUARIOS</h5>
                      <p>{formatNumber(props.data)}</p> 
                      
                  </div>
            </div>
      </React.Fragment>
    )
}

UsersQuantity.propTypes = {
    data: PropTypes.number 
}

export default UsersQuantity