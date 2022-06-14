import React, {useState, useEffect} from 'react'
import {Routes, Route,Link} from 'react-router-dom'
import { FetchingDatos } from '../../utils/FetchingDatos'
import TablaSecundaria from '../tablasSecundarias/TablasSecundaria'
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
      const cosojsoneado = window.sessionStorage.setItem('data',JSON.stringify(res))
      console.log(cosojsoneado);
      })
  },[])
   
  return (
    <div className='contenedor-principal-tablas-secundarias'>
        <ul className='links-tablas'>
            <li>
              <Link to='/unidades' className='link'>
                <p className='texto'>Unidades</p>
                <img className='imagen'alt='unidad' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2R8fOZuezGWtRsBR1RyiJjY7zu5BvG3PVQ&usqp=CAU'/>
              </Link>
            </li>
            <li>
              <Link to='/estatus' className='link'>
                <p className='texto'>Estatus</p>
                <img className='imagen' alt='estatus' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMVnmst6CyxClrlsZJDwdPGR_0PLb1P0AbA&usqp=CAU'/>
                </Link>
              </li>
            <li>
              <Link to='/expositions' className='link'>
              <p className='texto'> Expositions</p>
               <img className='imagen'alt='exposition' src='https://spng.subpng.com/20180502/vkw/kisspng-check-mark-x-mark-computer-icons-clip-art-5ae9ceaaa8ffa6.8792313315252722346922.jpg'/>
              </Link>
            </li>
            <li>
              <Link to='/payments' className='link'>
              <p className='texto'> Payments</p>
               <img className='imagen'alt='payments' src='https://www.dolarsi.com/wp-content/uploads/2022/04/imagen-medios-de-pago-def.jpeg'/>
              </Link>
            </li>
            <li>
              <Link to='/categories' className='link'>
              <p className='texto'> Categories</p>
               <img className='imagen'alt='categories' src='https://img.blogs.es/anexom/wp-content/uploads/2017/04/etiqueta-categoria-920x515.jpg'/>
              </Link>
            </li>
            <li>
              <Link to='/roles' className='link'>
              <p className='texto'> Roles</p>
               <img className='imagen'alt='roles' src='https://definicion.de/wp-content/uploads/2010/01/rol.png'/>
              </Link>
            </li>
        </ul>
      <Routes className='rutas'>
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
          element={<TablaSecundaria item='Payments' llave='name' position={3}/>}
          />     
           <Route 
          path='/categories/*'
          element={<TablaSecundaria item='Categories' llave='name' position={4}/>}
          />     
           <Route 
          path='/roles/*'
          element={<TablaSecundaria item='Roles' llave='name' position={5}/>}
          />     
      </Routes>
    </div>
  )
}

export default PrincipalTablasSecundarias