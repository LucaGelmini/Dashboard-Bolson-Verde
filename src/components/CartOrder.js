 
import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faCartShopping, faTicket } from '@fortawesome/free-solid-svg-icons'

 
 
function CartOrder(props) {
    function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

 
    return (
        <React.Fragment>
           
            <div className='cardsContainer'>
                  <div className='card border-left-primary'>
                  <FontAwesomeIcon className='icon-grey' icon= {faCartShopping} />
                      <h5 className='primary-text'>CANTIDAD COMPRAS</h5>
                      <p>{formatNumber(props.data)}</p> 
                      
                  </div>
                  <div className='card border-left-success'>
                  <FontAwesomeIcon className='icon-grey' icon={faSackDollar} />
                     <h5 className='success-text'>FACTURACIÓN TOTAL</h5>
                     <p>$ {formatNumber(props.data1)}</p> 
                  </div>
                  <div className='card border-left-warning'>
                  <FontAwesomeIcon className='icon-grey' icon= {faTicket} />
                    <h5 className='warning-text'>TICKET MÁS ALTO</h5>
                    <p>$ {formatNumber(props.data2)}</p> 
                  </div>
            </div>
      </React.Fragment>
    )
}

CartOrder.propTypes = {
    data: PropTypes.number,
    data1: PropTypes.number,
    data2: PropTypes.number 
}

export default CartOrder