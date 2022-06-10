import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Element from './Element'

const Detail = ({item}) => {
  return (
    <div>
        <h1>Listado de productos con: {item}</h1>
        <Routes>
            <Route path='/units' element={<Element/>} />
        </Routes>
    </div>
  )
}

export default Detail