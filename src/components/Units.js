import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { FetchingDatos } from '../js/FetchingDatos'

const TablaSecundaria = ({item,endPoint, llave}) => {
  let keyItem='type'; 
 if(llave) keyItem=llave
  const [unidades, setUnidades] = useState({})
  useEffect(()=>{  
        FetchingDatos(endPoint,setUnidades)
       },[endPoint])
  
  return (
    <div>
        {item}:{unidades.data!=[] && unidades?.data?.map((unidad,idx) =>
        <Link to={`#`} key={idx}>
         <li >{ unidad[keyItem]}</li>
         </Link>
         )}
        <p>Total {item.toLowerCase()}: {unidades.count}</p> 
    </div>
  )
}

export default TablaSecundaria