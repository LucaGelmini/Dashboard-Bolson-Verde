import React, {useState, useEffect} from 'react'
import {Routes, Route,Link} from 'react-router-dom'
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
        {/* <ul className='links-tablas'>
            <li className='link-unidades'>
              <Link to='/unidades' className='link'>
                <p className='texto'>Unidades</p>
                <img className='imagen' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2R8fOZuezGWtRsBR1RyiJjY7zu5BvG3PVQ&usqp=CAU'/>
              </Link>
            </li>
            <li className='link-estatus'>
              <Link to='/estatus' className='link'>
                <p className='texto'>Estatus</p>
                <img className='imagen' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMVnmst6CyxClrlsZJDwdPGR_0PLb1P0AbA&usqp=CAU'/>
                </Link>
              </li>
            <li className='link-expositions'>
              <Link to='/expositions' className='link'>
              <p className='texto'> Expositions</p>
               <img className='imagen' src='data:image/png;base64,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'/>
              </Link>
            </li>
        </ul> */}
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