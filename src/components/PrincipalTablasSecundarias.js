import React, {useState, useEffect} from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import { FetchingDatos } from '../utils/FetchingDatos'
import TablaSecundaria from './TablasSecundaria'

const PrincipalTablasSecundarias = () => {
  const [datos,setDatos] = useState([])
  useEffect(()=>{
    const fetchUnidades = FetchingDatos('unidad')
    const fetchEstatus = FetchingDatos('estatus')
    const fetchExpositions = FetchingDatos('expositions')
    const fetchPayments = FetchingDatos('payments')
    const fetchCategories = FetchingDatos('categories')
    const fetchRoles = FetchingDatos('roles')
    const data = Promise.all([fetchUnidades,fetchEstatus,fetchExpositions,fetchPayments,fetchCategories,fetchRoles])
    data.then(res =>{
      console.log(res)
      setDatos(res)
      })
  },[])
 
 
  return (
    <div>
        <ul>
            <li><Link to='/unidades'>Unidades</Link></li>
            <li><Link to='/estatus'>Estatus</Link></li>
            <li><Link to='/expositions'>Expositions</Link></li>
            <li><Link to='/payments'>Payments</Link></li>
            <li><Link to='/categories'>Categories</Link></li>
            <li><Link to='/roles'>Roles</Link></li>
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
         <Route 
        path='/payments/*'   
        element={<TablaSecundaria item='Payments' unidades={datos[3]}/>}
        />
         <Route 
        path='/categories/*'   
        element={<TablaSecundaria item='Categories' unidades={datos[4]}/>}
        />
         <Route 
        path='/roles/*'   
        element={<TablaSecundaria item='Roles' unidades={datos[5]}/>}
        />    
      
    </Routes>


    </div>
  )
}

export default PrincipalTablasSecundarias