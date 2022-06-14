import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import { FetchingDatos } from '../../js/FetchingDatos'
import TablaSecundaria from '../tablasSecundarias/TablasSecundaria'
import LinksRedireccion from './LinksRedireccion'
import './styles.css'

const PrincipalTablasSecundarias = () => {
  const [datos,setDatos] = useState([])
  useEffect(()=>{
    console.log('Montaje en principal');
    const fetchUnidades = FetchingDatos('unidad')
    const fetchEstatus = FetchingDatos('estatus')
    const fetchExpositions = FetchingDatos('expositions')
    const data = Promise.all([fetchUnidades,fetchEstatus,fetchExpositions])
    data.then(res =>{
      setDatos(res)
      window.sessionStorage.setItem('data',JSON.stringify(res))
      })
  },[])
   
  return (
    <div className='contenedor-principal-tablas-secundarias'>
      <Routes className='rutas'>
          <Route
          exact
            path='/'   
            element={<LinksRedireccion/>}
          />
          <Route 
          path='/unidades/*'   
          element={<TablaSecundaria item='Unidades' position={0}/>}
          />
          <Route 
          path='/estatus/*'  
          element={<TablaSecundaria item='Estatus' position={1}/>}
          />
          <Route 
          path='/expositions/*'
          element={<TablaSecundaria item='Expositions' llave='name' position={2}/>}
          />     
      </Routes>
    </div>
  )
}

export default PrincipalTablasSecundarias