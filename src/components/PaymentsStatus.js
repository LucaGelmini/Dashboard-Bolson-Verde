import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble} from '@fortawesome/free-solid-svg-icons'

 
<i class="fa-solid fa-ballot-check"></i>
 
function  PaymentsStatus(props) {
 
          
 
    return (
        <React.Fragment>
             <div className='doble-cards-container'>
                  <div className='card-doble border-left-primary'>
                  <FontAwesomeIcon className='icon-grey' icon= {faCheckDouble} />
                      <h5 className='primary-text'>ESTADO DE PAGOS</h5>
                      <p> <span>CONFIRMADOS:</span>  {props.data}</p> 
                      <p> <span>PENDIENTES:</span>  {props.data1}</p> 
                      <p> <span>RECHAZADOS:</span>  {props.data2}</p> 
                  </div>
            </div>
      </React.Fragment>
    )
}

// PaymentsStatus.propTypes = {
//     data: PropTypes.string 
// }

export default PaymentsStatus