import React from 'react'
import {useParams} from 'react-router-dom'

const Element = () => { 
  const elemento = useParams() 
  return (
    <div>Elemento: {elemento.id}</div>
  )
}

export default Element