import React, {useEffect, useState} from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Element from './Element'

const TablaSecundaria = ({item, unidades,llave='type'}) => {
  
const informacion = unidades

  return (
    <div>
        {item}:{informacion.data!==[] && informacion?.data?.map((unidad,idx) =>{
        return (<Link to={`/${item.toLowerCase()}/${unidad[llave]}`} key={idx}>
         <li >{ unidad[llave]}</li>
         </Link>)
})}
        <p>Total {item.toLowerCase()}: {informacion.count}</p>
          <Routes>
            <Route path=':id' element={ <Element item={informacion?.data ??[]} llave={llave}/>}/>             
           
          </Routes>
     
    </div>
  )
}

export default TablaSecundaria