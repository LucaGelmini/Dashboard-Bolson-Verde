import React, {useEffect, useState} from 'react'
import { FetchingDatos } from '../js/FetchingDatos'

const TablaSecundaria = ({item,endPoint}) => {
    const [unidades, setUnidades] = useState({})
    useEffect(()=>{  
        FetchingDatos(endPoint,setUnidades)
       },[])
  
  return (
    <div>
        {item}:{unidades.data!=[] && unidades?.data?.map((unidad,idx) =>
         <li key={idx}>{unidad.type}</li>
         )}
        <p>Total unidades: {unidades.count}</p> 
    </div>
  )
}

export default TablaSecundaria