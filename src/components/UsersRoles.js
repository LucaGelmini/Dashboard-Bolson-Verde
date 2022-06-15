 
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear,  faUserLarge, faUserTie } from '@fortawesome/free-solid-svg-icons'

 
 
 
function  UsersRoles(props) {
    function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
 
 
    return (
        <React.Fragment>
             <div className='cardsContainer'>
                  <div className='card border-left-primary'>
                  <FontAwesomeIcon className='icon-grey' icon= {faUserGear} />
                      <h5 className='primary-text'>ADMINISTRADORES</h5>
                      <p>{formatNumber(props.data)}</p> 
                      
                  </div>
                  <div className='card border-left-success'>
                  <FontAwesomeIcon className='icon-grey' icon={faUserLarge} />
                     <h5 className='success-text'>COMPRADORES</h5>
                     <p>{formatNumber(props.data1)}</p> 
                  </div>
                  <div className='card border-left-warning'>
                  <FontAwesomeIcon className='icon-grey' icon= {faUserTie} />
                    <h5 className='warning-text'>VENDEDORES</h5>
                    <p>{formatNumber(props.data2)}</p> 
                  </div>
            </div>
      </React.Fragment>
    )
}

UsersRoles.propTypes = {
    data: PropTypes.number,
    data1: PropTypes.number,
    data2: PropTypes.number 
}

export default UsersRoles