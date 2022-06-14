import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'


const Element = ({item, llave='type'}) => { 
 
  const elemento = useParams() ; 
  let listaMostrar = item.find(dato =>{  
      return dato[llave] === elemento.id  
  })
  console.log(listaMostrar);
  const impresionDatos = ()=>{
    if(llave==='type'){
      return listaMostrar.products.map((product,idx)=> <p key={idx}>{product.name?? 'No hay productos'}</p>)
    }else{
      return listaMostrar.cartsOrders.map((product,idx)=>{ 
      return (
        <div key={idx}>
          <p >Total productos: {product.total}</p>
          <p >User id: {product.user_id}</p>
        </div>
      )
    })
    }
  }
  return (
    <div>Elementos: 
       {impresionDatos()}    
    </div>
  )
}

export default Element