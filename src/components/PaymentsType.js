import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'

 
 
 
function  PaymentsType(props) {
 
          
 
    return (
        <React.Fragment>
             <div className='doble-cards-container'>
                  <div className='card-doble border-left-primary'>
                  <FontAwesomeIcon className='icon-grey' icon= {faFileInvoiceDollar} />
                      <h5 className='primary-text'>TIPOS DE PAGOS</h5>
                      <p> <span>EFECTIVO:</span>  {props.data}</p> 
                      <p> <span>TRANSFERENCIA:</span> {props.data1}</p> 
                      <p> <span>DEBIT:</span> {props.data2}</p> 
                      <p> <span>CRÉDITO:</span>  {props.data3}</p> 
                  </div>
            </div>
      </React.Fragment>
    )
}

// PaymentsType.propTypes = {
//     data: PropTypes.string 
// }

export default PaymentsType