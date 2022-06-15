 
import React from 'react';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGear} from '@fortawesome/free-solid-svg-icons';
import image from '../assets/avatar.jpg' 

 
 
 
function  BestBuyerUser(props) {
 
          
 
    return (
        <React.Fragment>
             <div className='doble-cards-container'>
                   <div className='card-doble border-left-primary'>
                     <img className="firstClient-avatar" width={'auto'} src={image} alt="avatar"/>
                      <h5 className='primary-text'>CLIENTE N° 1</h5>
                      <p> <span>NOMBRE:</span> {props.data}</p> 
                      <p><span>MAIL:</span>  {props.data2}</p> 
                      <p> <span>USERNAME:</span>   {props.data3}</p> 
                   </div>
            </div>
      </React.Fragment>
    )
}

// BestBuyerUser.propTypes = {
//     data: PropTypes.string 
// }

export default BestBuyerUser