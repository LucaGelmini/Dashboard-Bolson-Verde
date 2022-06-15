import React, {useState, useEffect} from 'react'
import {Routes, Route,Link} from 'react-router-dom'
import { FetchingDatos } from '../../utils/FetchingDatos'
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
    const fetchPayments = FetchingDatos('payments')
    const fetchCategories = FetchingDatos('categories')
    const fetchRoles = FetchingDatos('roles')
    const data = Promise.all([fetchUnidades,fetchEstatus,fetchExpositions,fetchPayments,fetchCategories,fetchRoles])
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
           <Route 
          path='/payments/*'
          element={<TablaSecundaria item='Payments' llave='method' position={3}/>}
          />     
           <Route 
          path='/categories/*'
          element={<TablaSecundaria item='Categories' llave='name' db2='products' position={4}/>}
          />    
           {/* <Route 
          path='/roles/*'
          element={<TablaSecundaria item='Roles' llave='name' position={5}/>}
          />      */}
      </Routes>
    </div>
  )
}

export default PrincipalTablasSecundarias