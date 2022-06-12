import React, {useState, useEffect} from 'react'
import {Routes, Route,Link} from 'react-router-dom'
import { FetchingDatos } from '../js/FetchingDatos'
import Element from './Element'
import TablaSecundaria from './TablasSecundaria'

const PrincipalTablasSecundarias = () => {
  const [datos,setDatos] = useState([])
  useEffect(()=>{

    const fetchUnidades = FetchingDatos('unidad')
    const fetchEstatus = FetchingDatos('estatus')
    const fetchExpositions = FetchingDatos('expositions')
    const data = Promise.all([fetchUnidades,fetchEstatus,fetchExpositions])
    data.then(res =>{
      setDatos(res)
      })
  },[])
 
 
  return (
    <div>
        <ul>
            <li><Link to='/unidades'>Unidades</Link></li>
            <li><Link to='/estatus'>Estatus</Link></li>
            <li><Link to='/expositions'>Expositions</Link></li>
        </ul>
    <Routes>
        <Route 
        path='/unidades/*'   
        element={<TablaSecundaria item='Unidades' unidades={datos[0]}/>}
        />
        <Route 
        path='/estatus/*'  
        element={<TablaSecundaria item='Estatus' unidades={datos[1]}/>}
        />
        <Route 
        path='/expositions/*'
        element={<TablaSecundaria item='Expositions' unidades={datos[2]} llave='name'/>}
        />          
      
    </Routes>


    </div>
  )
}

export default PrincipalTablasSecundarias