import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { FetchingDatos } from '../js/FetchingDatos'

const TablaSecundaria = ({item,endPoint, llave='type'}) => {
  const [unidades, setUnidades] = useState({})
  useEffect(()=>{  
        FetchingDatos(endPoint,setUnidades)
       },[endPoint])
  
  return (
    <div>
        {item}:{unidades.data!=[] && unidades?.data?.map((unidad,idx) =>
        <Link to={`/elemento/${unidad[llave]}`} key={idx}>
         <li >{ unidad[llave]}</li>
         </Link>
         )}
        <p>Total {item.toLowerCase()}: {unidades.count}</p>
     
    </div>
  )
}

export default TablaSecundaria