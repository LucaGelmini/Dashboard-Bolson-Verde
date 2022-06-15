//  import PropTypes from 'prop-types'
import React from 'react';
import  { useEffect, useState } from 'react';
import CartOrder from './CartOrder';
import BestBuyerUser from './BestBuyerUser';
import PaymentsType from './PaymentsType';
import PaymentsStatus from './PaymentsStatus';
 

 
function CartOrderKPI() {
  // Aca se define el estado inicial del componente
  const [cartOrderList, setCartOrderList] = useState([]);


  // Aca se define ciclo de vida del componente
  useEffect(()=>{
    console.log('%cSe monto el componente', 'color: green');
   fetch('http://localhost:3001/api/cartOrder/list')
   .then(response => response.json())
   .then(data => {setCartOrderList(data.data)})
   .catch(e=>{console.log(e)})
  }, [])

  useEffect(()=>{
    console.log('%cSe actualizo el componente', 'color: yellow');
  }, [cartOrderList])

  useEffect(()=>{
  return () => console.log('%cSe desmonto el componente', 'color: red');
 }, [])
  

   
   // Aca se trabaja la data de la API para poder renderizar la informacion relevante
   
    let cartOrderQuantity = cartOrderList.length
    let totalCartOrders = 0;
    const cartOrderTotals = [];
    let bestUserName;
    let bestUserID;
    let bestUserEmail;
    let bestUserUsername;
    let maxTotalCartOrder = () => {
        if(cartOrderList === ""){
            <h3>Cargando...</h3>
        } else {
          return  Math.max.apply(Math, cartOrderTotals);
        }
    } 
    let cashPaymentQuantity = 0;
    let bankPaymentQuantity = 0;
    let debitPaymentQuantity = 0;
    let creditPaymentQuantity = 0;
    let confirmPayment = 0;
    let pendingPayment = 0;
    let cancelPayment =0;
   
     
    if(cartOrderList === ""){
       <h3>Cargando...</h3>
    } else {
       
        cartOrderList.map(obj => {
            
        totalCartOrders = totalCartOrders + obj.total
        cartOrderTotals.push(obj.total)
        if(obj.total === maxTotalCartOrder()){
                    bestUserName = obj.user.fullname;
                    bestUserID = obj.user.id;
                    bestUserEmail = obj.user.email;
                    bestUserUsername = obj.user.username;
                }
        if(obj.payment.method === 'efectivo'){
            cashPaymentQuantity = cashPaymentQuantity + 1;
        }
        if(obj.payment.method === 'transferencia bancaria'){
            bankPaymentQuantity = bankPaymentQuantity + 1;
        }
        if(obj.payment.method === 'tarjeta de débito'){
            debitPaymentQuantity = debitPaymentQuantity + 1;
        }
        if(obj.payment.method === 'tarjeta de credito'){
            creditPaymentQuantity = creditPaymentQuantity + 1;
        }
        if(obj.status.name === 'confirmada'){
            confirmPayment = confirmPayment + 1;
        }
        if(obj.status.name === 'pendiente'){
            pendingPayment = pendingPayment + 1;
        }
        if(obj.status.name === 'cancelada'){
            cancelPayment = cancelPayment + 1;
        }
      })

       
      
    }

    return (
      <React.Fragment>
       
              
             <div className='cards-container'>
                <CartOrder data={cartOrderQuantity} data1={totalCartOrders} data2={maxTotalCartOrder()} />
                   <div className='bestUser-payType-container'>
                      <BestBuyerUser data={bestUserName} data1={bestUserID} data2={bestUserEmail} data3={bestUserUsername} />
                      <PaymentsType data={cashPaymentQuantity} data1={bankPaymentQuantity} data2={debitPaymentQuantity} data3={creditPaymentQuantity} />
                      <PaymentsStatus data={confirmPayment} data1={pendingPayment} data2={cancelPayment} />
                   </div>
             </div>
       
      </React.Fragment>
    )
  
}

export default CartOrderKPI