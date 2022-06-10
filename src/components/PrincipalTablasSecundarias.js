import React from 'react'
import {Routes, Route,Link} from 'react-router-dom'
import Element from './Element'
import TablaSecundaria from './Units'

const PrincipalTablasSecundarias = () => {
  return (
    <div>
        <ul>
            <li><Link to='/unidades'>Unidades</Link></li>
            <li><Link to='/estatus'>Estatus</Link></li>
            <li><Link to='/expositions'>Expositions</Link></li>
        </ul>
    <Routes>
        <Route path='/unidades' exact  element={<TablaSecundaria item='Unidades' endPoint='unidad'/>}/>
        <Route path='/estatus' exact element={<TablaSecundaria item='Estatus' endPoint='estatus'/>}/>
        <Route path='/expositions' exact element={<TablaSecundaria item='Expositions' endPoint='expositions' llave='name'/>}/>    
    </Routes>


    </div>
  )
}

export default PrincipalTablasSecundarias