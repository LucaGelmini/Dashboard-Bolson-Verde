import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { FetchingDatos } from '../js/FetchingDatos'

const Element = ({item}) => { 
  const elemento = useParams() 
 
  let listaMostrar = item.find(dato => dato.type === elemento.id)
  console.log(listaMostrar);


  return (
    <div>Elementos: 
       {listaMostrar?.products.map(product=>{
        return(
          <p>{product.name}</p>
        )
       })}
    
    </div>
  )
}

export default Element