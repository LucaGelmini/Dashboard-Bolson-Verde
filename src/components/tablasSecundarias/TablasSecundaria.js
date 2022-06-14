import React, {useEffect, useState} from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Element from '../elemento/Element'
import './styles.css'

const TablaSecundaria = ({item,llave='type', position}) => {
  const [informacion,setInformacion]=useState(JSON.parse(window.sessionStorage.getItem('data'))[position])  
  useEffect(()=>{  
    setInformacion(JSON.parse(window.sessionStorage.getItem('data'))[position])
  },[window.location.pathname])

  return (
    <div className='contenedor-lista-tabla'>
      <p className='item'>{item}:</p>
      <div className='contenedor-lista-principal'>
        <div className='links-principales'>
        {informacion.data!=[] && informacion?.data?.map((unidad,idx) =>{
          
        return (<Link to={`/${item.toLowerCase()}/${unidad[llave]}`} key={idx} className='link-lista-tabla'>
         <li className='item-tabla' >{idx+1}. { unidad[llave]}</li>
         </Link>)
})}
        <p className='lista-item'>Total {item.toLowerCase()}: {informacion.count}</p>
        </div>
 
      </div>
      <Routes>
            <Route path=':id' element={ <Element item={informacion?.data ??[]} llave={llave}/>}/>                        
          </Routes>
    </div>
  )
}

export default TablaSecundaria