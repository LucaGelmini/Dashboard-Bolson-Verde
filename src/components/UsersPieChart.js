//  import PropTypes from 'prop-types'
  
import  { useEffect, useState } from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
 
 
 function UsersKPIS() {
  
     // Estado inicial - users = nada array vacio
     const [usersList, setUsersList] = useState([]);

 
    //  const chartData = []
    //  let objectOne = {
    //   rol: 'administrador',
    //   cantidad: localStorage.adm 
    //  }
    //  let objectTwo = {
    //   rol: 'comprador',
    //   cantidad: localStorage.buy
    //  }
    //  let objectThree = {
    //   rol: 'vendedor',
    //   cantidad: localStorage.sell
    //  }
    // const admValue = JSON.parse(localStorage.adm);
    // const buyValue = JSON.parse(localStorage.buy);
    // const sellValue = JSON.parse(localStorage.sell)

  
const [roleData, setRoleData] = useState({
    labels: ['administrador', 'comprador', 'vendedor'],
    datasets: [
      {
        label: 'Roles Quantity',
        data: [0,0,0],
        backgroundColor: ['orange', 'blue', 'green'],
        borderColor: 'black',
        borderWidth: 2
      }
    ]
  })  
  
   // Hook montaje
  useEffect(()=>{
    console.log('%cSe monto el componente', 'color: green');
    fetch('http://localhost:3001/api/users/list')
    .then(response => response.json())
    .then(data => {setUsersList(data.data)
      const users = data.data
      let adm = 0;
      let buy =0;
      let sell =0;
      
      
   if(users === ""){
     <h3>Cargando...</h3>
  } else {
    users.map( obj => {
      if(obj.role.name === 'administrador'){
       adm = adm + 1
      } else if (obj.role.name === 'comprador'){
        buy = buy + 1
      } else if(obj.role.name === 'vendedor'){
        sell = sell + 1
      }
      
    })
  
     
 
      localStorage.adm = JSON.stringify(adm)
      localStorage.buy = JSON.stringify(buy)
      localStorage.sell = JSON.stringify(sell)

      
  }
    })
    .catch(e=>{console.log(e)}) 

    setRoleData({
      labels: ['administrador', 'comprador', 'vendedor'],
      datasets: [
        {
          label: 'Roles Quantity',
          data: [JSON.parse(localStorage.adm),JSON.parse(localStorage.buy),JSON.parse(localStorage.sell)],
          backgroundColor: ['orange', 'blue', 'green'],
          borderColor: 'black',
          borderWidth: 2
        }
      ]
    })

   console.log(roleData);
    
  }, [])


     // Hook Actualizacion
     useEffect(()=>{
      console.log('%cSe actualizo el componente', 'color: yellow');
    }, [setUsersList, setRoleData])

     // Hook desmontaje
     useEffect(()=>{
     return () => console.log('%cSe desmonto el componente', 'color: red');
    }, [])
   
     
     return (
       <div style={{width: 700}}>
          
           <Pie  data={roleData}/>
       </div>
     )
   
 }
 
 export default UsersKPIS