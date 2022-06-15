 
import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'

 
 
 
function  LastUser() {
 
       
       
 
    return (
        <React.Fragment>
             <div className='cardsContainer'>
                  <div className='card-doble border-left-primary'>
                  <FontAwesomeIcon className='icon-grey' icon= {faUserPlus} />
                      <h5 className='primary-text'>ULTIMO USUARIO</h5>
                      <p><span> NOMBRE:</span> {localStorage.lastUser}   </p> 
                  </div>
            </div>
      </React.Fragment>
    )
}

// LastUser.propTypes = {
//     data: PropTypes.string 
// }

export default LastUser