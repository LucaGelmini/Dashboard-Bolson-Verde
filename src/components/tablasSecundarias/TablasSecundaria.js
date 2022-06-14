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
      <Link to='/' className='regresar'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className='flecha' fill='#D84D09'>
        <path 
        d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/>
        </svg>
      Regresar
      </Link>
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