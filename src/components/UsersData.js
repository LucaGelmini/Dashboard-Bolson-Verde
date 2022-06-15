//  import PropTypes from 'prop-types'
import React from 'react';  
import  { useEffect, useState } from 'react';
import UsersRoles from './UsersRoles';
import UsersQuantity from './UsersQuantity';
import LastUser from './LastUser';
// import UsersPieChart from './UsersPieChart'
 


 function UsersData() {
   
 
  
     // Estado inicial - users = nada array vacio
     const [usersList, setUsersList] = useState([]);

     // Hook montaje
     useEffect(()=>{
        console.log('%cSe monto el componente', 'color: green');
        fetch('http://localhost:3001/api/users/list')
        .then(response => response.json())
        .then(data => {setUsersList(data.data)
         console.log(data.data);
         localStorage.lastUser = JSON.stringify(data.data[data.data.length-1].fullname)
         
        
      })
        .catch(e=>{console.log(e)}) 
      }, [])
      
      //Hook Actualizacion
      useEffect(()=>{
        console.log('%cSe actualizo el componente', 'color: yellow');

      }, [usersList])

      
      //Hook Desmontaje
      useEffect(()=>{
       return () => console.log('%cSe desmonto el componente', 'color: red');
        
      }, [])

 
 let admsQuantity = 0;
 let buyersQuantity = 0;
 let sellersQuantity = 0;
 let usersQuantity = usersList.length
 let lastUserData = usersList[usersList.length-1] 

 ///////////////////////////////////////////
//  localStorage.lastUser = JSON.stringify(usersList[usersList.length-1])
 

  if(usersList === ""){
    <h3>Cargando...</h3>
 } else {
   usersList.map( obj => {
     if(obj.role.name === 'administrador'){
        admsQuantity =  admsQuantity  + 1
     } else if (obj.role.name === 'comprador'){
        buyersQuantity = buyersQuantity + 1
     } else if(obj.role.name === 'vendedor'){
        sellersQuantity =  sellersQuantity + 1
     }
     
   })
 }

//  const lastUserParse = JSON.parse(localStorage.lastUser)
 
 console.log(admsQuantity);
 console.log(usersQuantity);
 console.log(lastUserData); 
  
  
   
     
     return (
        <React.Fragment>
         <div className='cards-container'>
            <UsersRoles data={admsQuantity} data1={buyersQuantity} data2={sellersQuantity}  />
            <div className='doble-cards-container'>
            <UsersQuantity data={usersQuantity} />
            <LastUser />
            </div>
            {/* <UsersPieChart/> */}
         </div>
          
        </React.Fragment>
     )
   
 }
 
 export default UsersData